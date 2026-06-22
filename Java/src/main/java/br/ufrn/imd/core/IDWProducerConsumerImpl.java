package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.model.DataSet;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.atomic.DoubleAdder;

/**
 * Cenário 9 — Produtor-Consumidor via LinkedBlockingQueue.
 *
 * Calcula o IDW de UM ponto (Estratégia E):
 *   - 1 produtor (tipo configurado em ioThreadType): particiona o dataset
 *     em ranges e enfileira [start, end).
 *   - N consumidores (tipo configurado em computeThreadType): consomem
 *     ranges, calculam parciais (num, den) localmente e depositam ao final
 *     via DoubleAdder.
 *
 * A sincronização é IMPLÍCITA na BlockingQueue: nem mutex nem volatile nos
 * acumuladores; a fila + o agregador atômico fazem o trabalho.
 */
public class IDWProducerConsumerImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;
    private static final int[] POISON_PILL = new int[] { -1, -1 };

    /**
     * Executa o cenário 9 (Produtor-Consumidor) sobre um dataset já em memória.
     *
     * @param dataSet sensores
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param config  cenário (define tipo do produtor, tipo/quantidade de consumidores
     *                e {@code chunkSize} usado como tamanho dos ranges enfileirados)
     * @return        valor IDW interpolado
     * @throws InterruptedException se a thread for interrompida durante o {@code join}
     */
    public double execute(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws InterruptedException {
        int numConsumers = Math.max(1, config.computeThreads());
        int n = dataSet.latitudes().length;
        int rangeSize = Math.max(1, config.chunkSize());

        LinkedBlockingQueue<int[]> queue = new LinkedBlockingQueue<>(numConsumers * 4);
        DoubleAdder num = new DoubleAdder();
        DoubleAdder den = new DoubleAdder();

        Runnable consumerTask = () -> {
            double[] lats = dataSet.latitudes();
            double[] lons = dataSet.longitudes();
            double[] vals = dataSet.values();
            try {
                while (true) {
                    int[] range = queue.take();
                    if (range == POISON_PILL) break;

                    double localNum = 0.0, localDen = 0.0;
                    for (int s = range[0]; s < range[1]; s++) {
                        double d = haversine(lons[s], lats[s], xq, yq);
                        if (d == 0.0) continue;
                        double w = 1.0 / (d * d);
                        localNum += w * vals[s];
                        localDen += w;
                    }
                    num.add(localNum);
                    den.add(localDen);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        Runnable producerTask = () -> {
            try {
                for (int start = 0; start < n; start += rangeSize) {
                    int end = Math.min(start + rangeSize, n);
                    queue.put(new int[] { start, end });
                }
                for (int c = 0; c < numConsumers; c++) {
                    queue.put(POISON_PILL);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        List<Thread> consumers = new ArrayList<>();
        for (int c = 0; c < numConsumers; c++) {
            Thread t = switch (config.computeThreadType()) {
                case PLATFORM -> Thread.ofPlatform().start(consumerTask);
                case VIRTUAL  -> Thread.ofVirtual().start(consumerTask);
            };
            consumers.add(t);
        }

        Thread producer = switch (config.ioThreadType()) {
            case PLATFORM -> Thread.ofPlatform().start(producerTask);
            case VIRTUAL  -> Thread.ofVirtual().start(producerTask);
        };

        producer.join();
        for (Thread t : consumers) t.join();

        return num.sum() / den.sum();
    }

    /**
     * Distância geodésica em km entre dois pontos pela fórmula de Haversine.
     *
     * @param lon1 longitude do ponto 1 (graus)
     * @param lat1 latitude do ponto 1 (graus)
     * @param lon2 longitude do ponto 2 (graus)
     * @param lat2 latitude do ponto 2 (graus)
     * @return distância em km
     */
    private static double haversine(double lon1, double lat1, double lon2, double lat2) {
        double dlon = (lon2 - lon1) * RADIAN;
        double dlat = (lat2 - lat1) * RADIAN;

        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1 * RADIAN)
                * Math.cos(lat2 * RADIAN)
                * Math.pow(Math.sin(dlon / 2), 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return EARTH_RADIUS * c;
    }
}
