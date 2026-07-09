package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;

import java.nio.file.Path;
import java.util.List;
import java.util.concurrent.StructuredTaskScope;
import java.util.concurrent.ThreadFactory;

/**
 * Etapa 2, estratégia Structured Concurrency (JEP 505, estável no JDK 25+).
 *
 * Modelo: um escopo hierárquico ({@link StructuredTaskScope}) age como "pai"
 * de todas as subtasks de cálculo; ou todas terminam com sucesso ou o escopo
 * é cancelado como um todo (semântica de {@code Joiner.allSuccessfulOrThrow}).
 * Comparado a {@link IDWCompletableFutureImpl}, a diferença central é o ciclo
 * de vida: aqui a duração das subtasks está sintaticamente contida no
 * try-with-resources do escopo, o que elimina classes inteiras de vazamento
 * de tarefas e simplifica o tratamento de erros.
 *
 * O {@link ThreadFactory} do escopo é escolhido pelo cenário
 * ({@code computeThreadType}): Platform por padrão na Etapa 2, com opção de
 * Virtual para contraste. A fase IO segue por {@link CsvDatasetReader} antes
 * do escopo (mantém o mesmo comparativo justo com as outras estratégias).
 */
public class IDWStructuredConcurrencyImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    private final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Pipeline completo: lê CSV (fora do escopo) e executa cálculo dentro
     * de um {@link StructuredTaskScope}.
     *
     * @param datasetPath caminho do {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário (define tipo/qtd de threads por fase)
     * @return valor IDW interpolado
     * @throws Exception se leitura, escopo ou subtask falhar
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
     * Executa apenas o cálculo. Fan-out em N subtasks dentro de um
     * {@link StructuredTaskScope} configurado com {@link ThreadFactory}
     * derivada de {@code config.computeThreadType()}.
     *
     * @param dataSet sensores em memória
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param config  cenário
     * @return {@code num/den}
     * @throws Exception se o join falhar ou alguma subtask lançar
     */
    public double executeComputation(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        int n = dataSet.latitudes().length;
        int threads = Math.max(1, config.computeThreads());
        int chunk = (int) Math.ceil((double) n / threads);

        ThreadFactory factory = threadFactoryFor(config.computeThreadType());

        try (var scope = StructuredTaskScope.open(
                StructuredTaskScope.Joiner.<double[]>allSuccessfulOrThrow(),
                cfg -> cfg.withThreadFactory(factory).withName("idw-compute"))) {

            for (int t = 0; t < threads; t++) {
                final int start = t * chunk;
                final int end = Math.min(start + chunk, n);
                if (start >= end) break;
                scope.fork(() -> partial(dataSet, xq, yq, start, end));
            }

            List<double[]> results = scope.join();

            double num = 0.0;
            double den = 0.0;
            for (double[] r : results) {
                num += r[0];
                den += r[1];
            }
            return num / den;
        }
    }

    /**
     * @return {@link ThreadFactory} correspondente ao {@link ThreadType}.
     */
    private static ThreadFactory threadFactoryFor(ThreadType t) {
        return switch (t) {
            case PLATFORM -> Thread.ofPlatform().factory();
            case VIRTUAL  -> Thread.ofVirtual().factory();
        };
    }

    /**
     * Cálculo sequencial de uma partição de sensores.
     *
     * @param ds    sensores
     * @param xq    longitude do ponto de consulta
     * @param yq    latitude do ponto de consulta
     * @param start índice inicial (inclusivo)
     * @param end   índice final (exclusivo)
     * @return {@code double[] {numParcial, denParcial}}
     */
    private static double[] partial(DataSet ds, double xq, double yq, int start, int end) {
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

    /**
     * Distância geodésica em km pela fórmula de Haversine.
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
