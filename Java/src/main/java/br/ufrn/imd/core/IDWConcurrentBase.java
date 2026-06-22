package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;
import br.ufrn.imd.utils.ExecutorFactory;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;

/**
 * Base da hierarquia de implementações concorrentes do IDW (Estratégia E:
 * ponto único + acumuladores compartilhados).
 *
 * A computação é paralelizada por PARTIÇÃO DO DATASET DE SENSORES — cada thread
 * processa um intervalo contíguo de amostras e contribui com (w*z, w) para os
 * acumuladores globais via contribute(). O ponto de contenção real está em
 * num/den, e é ali que cada subclasse aplica sua estratégia de sincronização.
 *
 * A leitura do CSV (fase de IO) permanece separada — é executada por
 * CsvDatasetReader em um pool próprio, e só depois disso a fase de cálculo
 * começa.
 */
public abstract class IDWConcurrentBase {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    protected final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Executa o pipeline completo: lê o CSV em paralelo e roda a fase de cálculo.
     *
     * @param datasetPath caminho do arquivo {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário de execução (tipos/quantidades de threads e sync)
     * @return            valor IDW interpolado para {@code (xq, yq)}
     * @throws Exception  se a leitura ou alguma tarefa de cálculo falhar
     */
    public double executeFullProcess(
            Path datasetPath,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        DataSet dataSet = reader.read(datasetPath, config);
        return executeComputation(dataSet, xq, yq, config);
    }

    /**
     * Executa apenas a fase de cálculo (assume {@code dataSet} já carregado).
     * Particiona os sensores entre {@code config.computeThreads()} workers,
     * que chamam {@link #contribute(double, double)} para acumular parciais.
     *
     * @param dataSet sensores já em memória
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param config  cenário de execução
     * @return        valor IDW interpolado
     * @throws Exception se alguma das tarefas paralelas falhar
     */
    public double executeComputation(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        reset();

        int n = dataSet.latitudes().length;
        int threads = Math.max(1, config.computeThreads());
        int chunk = (int) Math.ceil((double) n / threads);

        try (ExecutorService executor = ExecutorFactory.create(
                config.computeThreadType(),
                threads
        )) {
            List<Future<?>> futures = new ArrayList<>();

            for (int t = 0; t < threads; t++) {
                final int start = t * chunk;
                final int end = Math.min(start + chunk, n);
                if (start >= end) break;

                futures.add(executor.submit(() ->
                        processPartition(dataSet, xq, yq, start, end)));
            }

            for (Future<?> f : futures) {
                f.get();
            }
        }

        return finalResult();
    }

    /**
     * Loop interno executado por cada worker sobre seu intervalo de sensores.
     * Para cada sensor calcula peso {@code w = 1/d²} (haversine) e chama
     * {@link #contribute(double, double)} com {@code (w·valor, w)}.
     *
     * @param dataSet sensores
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param start   índice inicial do intervalo (inclusivo)
     * @param end     índice final do intervalo (exclusivo)
     */
    protected void processPartition(
            DataSet dataSet,
            double xq,
            double yq,
            int start,
            int end
    ) {
        double[] lats = dataSet.latitudes();
        double[] lons = dataSet.longitudes();
        double[] vals = dataSet.values();

        for (int s = start; s < end; s++) {
            double d = haversine(lons[s], lats[s], xq, yq);
            if (d == 0.0) continue;
            double w = 1.0 / (d * d);
            contribute(w * vals[s], w);
        }
    }

    /** Zera os acumuladores antes de uma nova execução. */
    protected abstract void reset();

    /**
     * Acumula a contribuição de um sensor nos agregadores compartilhados.
     * É AQUI que cada subclasse aplica sua estratégia de sincronização.
     *
     * @param weightedValue produto {@code peso × valor} (vai para {@code num})
     * @param weight        peso {@code 1/d²}            (vai para {@code den})
     */
    protected abstract void contribute(double weightedValue, double weight);

    /**
     * @return resultado final do IDW após todas as threads terminarem ({@code num/den}).
     */
    protected abstract double finalResult();

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
