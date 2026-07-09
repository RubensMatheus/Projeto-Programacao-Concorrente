package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;

import java.nio.file.Path;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

/**
 * Etapa 2, estratégia ForkJoin Framework sobre o mesmo IDW (Estratégia E: 1 ponto).
 *
 * Modelo distinto do {@link IDWConcurrentBase}: em vez de particionar uma vez
 * por N workers e submeter a um executor, aqui a divisão é RECURSIVA via
 * {@link RecursiveTask}. Cada tarefa quebra o intervalo ao meio até cair
 * abaixo de {@code threshold}, quando executa sequencialmente. O framework
 * cuida de balanceamento por work-stealing.
 *
 * A retorno {@code double[2]} de cada tarefa carrega {@code (num, den)}
 * parciais, combinados associativamente no join.
 *
 * Fase IO: {@link CsvDatasetReader} com {@code config.ioThreadType()}
 * (Virtual por padrão na Etapa 2). Fase compute: {@link ForkJoinPool} custom
 * com paralelismo {@code config.computeThreads()}, sempre platform threads
 * (o construtor default de FJP usa {@code defaultForkJoinWorkerThreadFactory}).
 */
public class IDWForkJoinImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    /** Piso do threshold sequencial para evitar splits absurdamente pequenos. */
    private static final int MIN_THRESHOLD = 1024;

    private final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Pipeline completo: lê o CSV e executa o cálculo via fork-join recursivo.
     *
     * @param datasetPath caminho do {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário (usa {@code computeThreads} como paralelismo do FJP)
     * @param splitFactor multiplicador do threshold: quanto maior, mais folhas
     *                    (mais forks, melhor balanceamento, maior overhead)
     * @return valor IDW interpolado
     * @throws Exception se leitura ou tarefas falharem
     */
    public double executeFullProcess(
            Path datasetPath,
            double xq,
            double yq,
            ExecutionConfig config,
            int splitFactor
    ) throws Exception {
        DataSet dataSet = reader.read(datasetPath, config);
        return executeComputation(dataSet, xq, yq, config, splitFactor);
    }

    /**
     * Executa apenas o cálculo em fork-join sobre um dataset já carregado.
     *
     * @param dataSet     sensores em memória
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário (paralelismo = {@code computeThreads})
     * @param splitFactor multiplicador do threshold sequencial
     * @return {@code num/den}
     * @throws Exception se a invocação do pool falhar
     */
    public double executeComputation(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config,
            int splitFactor
    ) throws Exception {
        int parallelism = Math.max(1, config.computeThreads());
        int n = dataSet.latitudes().length;
        int threshold = Math.max(MIN_THRESHOLD, n / (parallelism * Math.max(1, splitFactor)));

        try (ForkJoinPool pool = new ForkJoinPool(parallelism)) {
            IDWTask root = new IDWTask(dataSet, xq, yq, 0, n, threshold);
            double[] agg = pool.invoke(root);
            return agg[0] / agg[1];
        }
    }

    /**
     * Tarefa recursiva: se o intervalo for {@code <= threshold}, calcula
     * sequencialmente; caso contrário, quebra ao meio, dispara a metade esquerda
     * via {@code fork()} e computa a direita in-thread para reduzir overhead
     * (padrão canônico do ForkJoin).
     */
    private static final class IDWTask extends RecursiveTask<double[]> {

        private final DataSet ds;
        private final double xq;
        private final double yq;
        private final int start;
        private final int end;
        private final int threshold;

        IDWTask(DataSet ds, double xq, double yq, int start, int end, int threshold) {
            this.ds = ds;
            this.xq = xq;
            this.yq = yq;
            this.start = start;
            this.end = end;
            this.threshold = threshold;
        }

        @Override
        protected double[] compute() {
            int len = end - start;
            if (len <= threshold) {
                return sequential();
            }
            int mid = start + (len >>> 1);
            IDWTask left = new IDWTask(ds, xq, yq, start, mid, threshold);
            IDWTask right = new IDWTask(ds, xq, yq, mid, end, threshold);

            left.fork();
            double[] r = right.compute();
            double[] l = left.join();

            return new double[] { l[0] + r[0], l[1] + r[1] };
        }

        private double[] sequential() {
            double[] lats = ds.latitudes();
            double[] lons = ds.longitudes();
            double[] vals = ds.values();

            double num = 0.0;
            double den = 0.0;

            for (int s = start; s < end; s++) {
                double d = haversine(lons[s], lats[s], xq, yq);
                if (d == 0.0) continue;
                double w = 1.0 / (d * d);
                num += w * vals[s];
                den += w;
            }

            return new double[] { num, den };
        }
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
