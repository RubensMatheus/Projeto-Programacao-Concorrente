package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;

import java.nio.file.Path;
import java.util.concurrent.ForkJoinPool;
import java.util.stream.IntStream;

/**
 * Etapa 2, estratégia Parallel Streams sobre o mesmo IDW (Estratégia E: 1 ponto).
 *
 * Modelo de execução distinto do {@link IDWConcurrentBase}: não há partição
 * manual nem executor gerenciado por nós. O paralelismo é declarativo, expresso
 * por {@code IntStream.range().parallel()}, e o Stream API escolhe o
 * particionamento (via Spliterator) e agrega através de uma redução mutável
 * interna, inerentemente livre de race (identidade + combiner associativo).
 *
 * Duas variantes de execução:
 * <ul>
 *   <li>{@code parallelism == 0}: usa o {@code ForkJoinPool.commonPool}
 *       (padrão da JVM, platform threads, paralelismo = cores - 1).</li>
 *   <li>{@code parallelism  > 0}: submete o stream dentro de um
 *       {@code ForkJoinPool} custom com o grau informado, isolando a medição
 *       do commonPool compartilhado com o resto do processo.</li>
 * </ul>
 *
 * Fase IO permanece no {@link CsvDatasetReader}, respeitando
 * {@code config.ioThreadType()} (Virtual por padrão na Etapa 2).
 */
public class IDWParallelStreamImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    private final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Pipeline completo: lê o CSV em paralelo e executa a fase de cálculo via
     * parallel stream.
     *
     * @param datasetPath caminho do {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário (define {@code ioThreadType}, {@code ioThreads}
     *                    e {@code computeThreads} usados como paralelismo do FJP)
     * @return            valor IDW interpolado
     * @throws Exception  se a leitura ou a fase paralela falhar
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
     * Executa apenas a fase de cálculo. Se {@code config.computeThreads() == 0},
     * roda no commonPool; caso contrário, dentro de um {@link ForkJoinPool}
     * custom com o grau informado.
     *
     * @param dataSet sensores já em memória
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param config  cenário
     * @return        valor IDW interpolado
     * @throws Exception se a submissão ao pool custom falhar
     */
    public double executeComputation(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        int parallelism = Math.max(0, config.computeThreads());

        if (parallelism == 0) {
            return computeParallel(dataSet, xq, yq);
        }

        try (ForkJoinPool pool = new ForkJoinPool(parallelism)) {
            return pool.submit(() -> computeParallel(dataSet, xq, yq)).get();
        }
    }

    /**
     * Núcleo do cálculo em stream paralelo. Reduz {@code (num, den)} em um
     * {@code double[2]} via {@code IntStream.collect}: cada worker acumula
     * localmente e o combiner soma pares parciais.
     *
     * @param dataSet sensores
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @return        {@code num/den}
     */
    private static double computeParallel(DataSet dataSet, double xq, double yq) {
        double[] lats = dataSet.latitudes();
        double[] lons = dataSet.longitudes();
        double[] vals = dataSet.values();

        double[] agg = IntStream.range(0, lats.length)
                .parallel()
                .collect(
                        () -> new double[2],
                        (a, s) -> {
                            double d = haversine(lons[s], lats[s], xq, yq);
                            if (d == 0.0) return;
                            double w = 1.0 / (d * d);
                            a[0] += w * vals[s];
                            a[1] += w;
                        },
                        (a, b) -> {
                            a[0] += b[0];
                            a[1] += b[1];
                        }
                );

        return agg[0] / agg[1];
    }

    /**
     * Distância geodésica em km pela fórmula de Haversine.
     *
     * @param lon1 longitude do ponto 1 (graus)
     * @param lat1 latitude  do ponto 1 (graus)
     * @param lon2 longitude do ponto 2 (graus)
     * @param lat2 latitude  do ponto 2 (graus)
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
