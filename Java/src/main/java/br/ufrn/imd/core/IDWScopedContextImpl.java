package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;

import java.nio.file.Path;
import java.util.List;
import java.util.concurrent.StructuredTaskScope;
import java.util.concurrent.ThreadFactory;
import java.util.function.Supplier;

/**
 * Cenário dedicado comparando {@link InheritableThreadLocal} vs {@link ScopedValue}
 * (JEP 506) como veículos de contexto por-thread. Ambos os modos usam
 * {@link StructuredTaskScope} para o fan-out, isolando a variável observada em
 * "como o contexto chega ao worker".
 *
 * <ul>
 *   <li><b>InheritableThreadLocal:</b> valor mutável associado à thread; cada
 *       Virtual Thread criada COPIA o valor herdado do pai.</li>
 *   <li><b>ScopedValue:</b> associação IMUTÁVEL a um escopo dinâmico, sem cópia;
 *       leitura O(1) via bitmask, integração natural com {@link StructuredTaskScope}.</li>
 * </ul>
 */
public class IDWScopedContextImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    public record QueryContext(double xq, double yq) {}

    public enum ContextMode { THREAD_LOCAL, SCOPED_VALUE }

    private static final InheritableThreadLocal<QueryContext> TL_CONTEXT =
            new InheritableThreadLocal<>();

    private static final ScopedValue<QueryContext> SV_CONTEXT =
            ScopedValue.newInstance();

    private final CsvDatasetReader reader = new CsvDatasetReader();

    public double executeFullProcess(
            Path datasetPath,
            ExecutionConfig config,
            double xq,
            double yq,
            ContextMode mode
    ) throws Exception {
        DataSet ds = reader.read(datasetPath, config);
        return executeComputation(ds, config, xq, yq, mode);
    }

    public double executeComputation(
            DataSet ds,
            ExecutionConfig config,
            double xq,
            double yq,
            ContextMode mode
    ) throws Exception {
        QueryContext ctx = new QueryContext(xq, yq);
        return switch (mode) {
            case THREAD_LOCAL -> runWithThreadLocal(ds, config, ctx);
            case SCOPED_VALUE -> runWithScopedValue(ds, config, ctx);
        };
    }

    private double runWithThreadLocal(DataSet ds, ExecutionConfig config, QueryContext ctx) throws Exception {
        TL_CONTEXT.set(ctx);
        try {
            return fanOut(ds, config, TL_CONTEXT::get);
        } finally {
            TL_CONTEXT.remove();
        }
    }

    private double runWithScopedValue(DataSet ds, ExecutionConfig config, QueryContext ctx) throws Exception {
        return ScopedValue.where(SV_CONTEXT, ctx)
                .call(() -> fanOut(ds, config, SV_CONTEXT::get));
    }

    private double fanOut(DataSet ds, ExecutionConfig config, Supplier<QueryContext> ctxSupplier) throws Exception {
        int n = ds.latitudes().length;
        int threads = Math.max(1, config.computeThreads());
        int chunk = (int) Math.ceil((double) n / threads);
        ThreadFactory factory = threadFactoryFor(config.computeThreadType());

        try (var scope = StructuredTaskScope.open(
                StructuredTaskScope.Joiner.<double[]>allSuccessfulOrThrow(),
                cfg -> cfg.withThreadFactory(factory).withName("idw-context"))) {

            for (int t = 0; t < threads; t++) {
                final int start = t * chunk;
                final int end = Math.min(start + chunk, n);
                if (start >= end) break;
                scope.fork(() -> {
                    QueryContext c = ctxSupplier.get();
                    return partial(ds, c.xq(), c.yq(), start, end);
                });
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

    private static ThreadFactory threadFactoryFor(ThreadType t) {
        return switch (t) {
            case PLATFORM -> Thread.ofPlatform().factory();
            case VIRTUAL  -> Thread.ofVirtual().factory();
        };
    }

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
