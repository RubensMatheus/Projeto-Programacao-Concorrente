package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;
import br.ufrn.imd.utils.ExecutorFactory;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;

/**
 * Etapa 2, estratégia CompletableFuture sobre o mesmo IDW (Estratégia E: 1 ponto).
 *
 * Vitrine da política "IO em Virtual, cálculo em Platform": o pipeline é
 * escrito como composição assíncrona explícita com DOIS executores distintos,
 * passados como parâmetro nas etapas ({@code supplyAsync(..., ioExec)} e
 * {@code thenComposeAsync(..., cpuExec)}).
 *
 * Fase compute: fan-out em N sub-{@link CompletableFuture}s, uma por partição,
 * combinadas em um único {@code double[2]} via {@link CompletableFuture#allOf}
 * + join associativo. Sem locks; a agregação acontece serialmente no callback
 * do {@code thenApply} após todas as parciais estarem prontas.
 */
public class IDWCompletableFutureImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    private final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Pipeline assíncrono completo: {@code IO virtual → compute platform → agrega}.
     *
     * @param datasetPath caminho do {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      cenário (define tipos e quantidades de threads por fase)
     * @return valor IDW interpolado
     * @throws Exception se qualquer etapa do pipeline falhar
     */
    public double executeFullProcess(
            Path datasetPath,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        try (ExecutorService ioExec = ExecutorFactory.create(
                config.ioThreadType(), config.ioThreads());
             ExecutorService cpuExec = ExecutorFactory.create(
                     config.computeThreadType(), config.computeThreads())) {

            CompletableFuture<double[]> pipeline =
                    CompletableFuture
                            .supplyAsync(() -> readSafely(datasetPath, config), ioExec)
                            .thenComposeAsync(ds -> computeAsync(ds, xq, yq, config, cpuExec),
                                              cpuExec);

            double[] agg = pipeline.get();
            return agg[0] / agg[1];
        }
    }

    /**
     * Executa apenas a fase de cálculo sobre um dataset já em memória,
     * usando um {@link Executor} de cálculo fornecido pelo chamador.
     *
     * @param dataSet sensores em memória
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param config  cenário (usa {@code computeThreads} para o fan-out)
     * @return {@code num/den}
     * @throws Exception se alguma parcial falhar
     */
    public double executeComputation(
            DataSet dataSet,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        try (ExecutorService cpuExec = ExecutorFactory.create(
                config.computeThreadType(), config.computeThreads())) {
            double[] agg = computeAsync(dataSet, xq, yq, config, cpuExec).get();
            return agg[0] / agg[1];
        }
    }

    /**
     * Fan-out em N sub-futures (uma por partição), combinadas via {@code allOf}
     * e agregadas em {@code (num, den)}.
     *
     * @param ds      sensores
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @param cfg     cenário (particiona por {@code computeThreads})
     * @param exec    executor de cálculo
     * @return future com {@code double[2] = {num, den}}
     */
    private CompletableFuture<double[]> computeAsync(
            DataSet ds,
            double xq,
            double yq,
            ExecutionConfig cfg,
            Executor exec
    ) {
        int n = ds.latitudes().length;
        int threads = Math.max(1, cfg.computeThreads());
        int chunk = (int) Math.ceil((double) n / threads);

        List<CompletableFuture<double[]>> parts = new ArrayList<>(threads);
        for (int t = 0; t < threads; t++) {
            final int start = t * chunk;
            final int end = Math.min(start + chunk, n);
            if (start >= end) break;
            parts.add(CompletableFuture.supplyAsync(
                    () -> partial(ds, xq, yq, start, end), exec));
        }

        return CompletableFuture.allOf(parts.toArray(new CompletableFuture[0]))
                .thenApply(v -> {
                    double num = 0.0;
                    double den = 0.0;
                    for (CompletableFuture<double[]> f : parts) {
                        double[] r = f.join();
                        num += r[0];
                        den += r[1];
                    }
                    return new double[] { num, den };
                });
    }

    /**
     * Wrap checked exception da leitura para o contrato de {@link java.util.function.Supplier}.
     */
    private DataSet readSafely(Path p, ExecutionConfig cfg) {
        try {
            return reader.read(p, cfg);
        } catch (Exception e) {
            throw new CompletionException(e);
        }
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
