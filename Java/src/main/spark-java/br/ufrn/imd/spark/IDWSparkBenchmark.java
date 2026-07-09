package br.ufrn.imd.spark;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.spark.scheduler.SparkListener;
import org.apache.spark.scheduler.SparkListenerJobEnd;
import org.apache.spark.scheduler.SparkListenerTaskEnd;
import org.apache.spark.sql.SparkSession;

/**
 * Macrobenchmark das 4 abordagens Spark.
 *
 * NÃO é JMH: o SparkContext é global à JVM e caro de subir/derrubar, então JMH
 * (que assume código curto, isolado e com fork por iteração) não se aplica. A
 * medição segue o padrão de macrobenchmark: cronômetro de wallclock, warmup
 * descartado, N repetições medidas, estatísticas agregadas (média, desvio,
 * mediana, min, max).
 *
 * Além do wallclock, um {@link SparkListener} coleta por job:
 * {@code executorRunTime}, {@code jvmGcTime}, {@code shuffleReadBytes},
 * {@code shuffleWriteBytes}, {@code peakExecutionMemory}. Os totais por
 * repetição são impressos junto com o tempo.
 *
 * Event log é habilitado em {@code benchmark-results/etapa2/spark/eventlog/}
 * para análise post-hoc no Spark History Server.
 *
 * Saída por repetição (fácil de parsear com grep/awk):
 * <pre>{@code
 * sample,approach=rdd_csv,iter=1,elapsed_seconds=2.041,result=24.874119,executor_run_ms=15234,jvm_gc_ms=812,shuffle_read_bytes=0,shuffle_write_bytes=0,peak_exec_mem=134217728
 * }</pre>
 *
 * E, ao final de cada abordagem, uma linha de agregado:
 * <pre>{@code
 * summary,approach=rdd_csv,n=5,mean_s=2.033,stddev_s=0.041,min_s=1.981,median_s=2.028,max_s=2.101
 * }</pre>
 *
 * Uso:
 * <pre>{@code
 *   export JAVA_HOME=$(/usr/libexec/java_home -v 21)
 *   mvn -Pspark clean compile
 *   mvn -Pspark exec:java -Dexec.mainClass=br.ufrn.imd.spark.IDWSparkBenchmark
 *
 *   # com número customizado de repetições e warmups:
 *   mvn -Pspark exec:java -Dexec.mainClass=br.ufrn.imd.spark.IDWSparkBenchmark \
 *       -Dexec.args="--warmup 1 --measure 5"
 *
 *   # filtrar por abordagem:
 *   mvn -Pspark exec:java -Dexec.mainClass=br.ufrn.imd.spark.IDWSparkBenchmark \
 *       -Dexec.args="rdd df"
 * }</pre>
 */
public class IDWSparkBenchmark {

    private static final String EVENT_LOG_DIR = "benchmark-results/etapa2/spark/eventlog";

    public static void main(String[] args) throws Exception {
        int warmup = intArg(args, "--warmup", 1);
        int measure = intArg(args, "--measure", 5);

        Path eventLog = Paths.get(EVENT_LOG_DIR);
        Files.createDirectories(eventLog);

        SparkSession spark = SparkSession.builder()
                .appName("IDWSparkBenchmark")
                .master("local[*]")
                .config("spark.sql.shuffle.partitions", "16")
                .config("spark.eventLog.enabled", "true")
                .config("spark.eventLog.dir", "file://" + eventLog.toAbsolutePath())
                .getOrCreate();
        spark.sparkContext().setLogLevel("WARN");

        MetricsListener metrics = new MetricsListener();
        spark.sparkContext().addSparkListener(metrics);

        double xq = SparkQueryConfig.QUERY_LONGITUDE;
        double yq = SparkQueryConfig.QUERY_LATITUDE;

        boolean runRdd        = filter(args, "rdd");
        boolean runDf         = filter(args, "df");
        boolean runDfParquet  = filter(args, "dfparquet");
        boolean runDfInfer    = filter(args, "dfinfer");
        boolean runSql        = filter(args, "sql");
        boolean runDsParquet  = filter(args, "dsparquet");
        boolean runUdfGroupBy = filter(args, "udfgroupby");

        if (runRdd)        runApproach("rdd_csv",              warmup, measure, metrics,
                                       () -> new IDWSparkRDDImpl().execute(spark, xq, yq));
        if (runDf)         runApproach("dataframe_csv",        warmup, measure, metrics,
                                       () -> new IDWSparkDataFrameImpl().execute(spark, xq, yq));
        if (runDfParquet)  runApproach("dataframe_parquet",    warmup, measure, metrics,
                                       () -> new IDWSparkDataFrameParquetImpl().execute(spark, xq, yq));
        if (runDfInfer)    runApproach("dataframe_csv_infer",  warmup, measure, metrics,
                                       () -> new IDWSparkDataFrameInferImpl().execute(spark, xq, yq));
        if (runSql)        runApproach("sql_tempview_csv",     warmup, measure, metrics,
                                       () -> new IDWSparkSqlImpl().execute(spark, xq, yq));
        if (runDsParquet)  runApproach("dataset_parquet",      warmup, measure, metrics,
                                       () -> new IDWSparkDatasetParquetImpl().execute(spark, xq, yq));
        if (runUdfGroupBy) runApproach("udf_groupby_multi",    warmup, measure, metrics,
                                       () -> new IDWSparkUDFGroupByImpl().execute(spark, SparkQueryConfig.queryPointsMulti()));

        spark.stop();
    }

    private static void runApproach(String label, int warmup, int measure,
                                    MetricsListener metrics,
                                    java.util.function.DoubleSupplier op) {
        for (int i = 0; i < warmup; i++) {
            metrics.reset();
            long t0 = System.nanoTime();
            double r = op.getAsDouble();
            double secs = (System.nanoTime() - t0) / 1e9;
            System.out.printf(Locale.ROOT,"warmup,approach=%s,iter=%d,elapsed_seconds=%.3f,result=%.6f%n",
                    label, i + 1, secs, r);
        }

        List<Double> samples = new ArrayList<>(measure);
        List<Double> ratios = new ArrayList<>(measure);
        for (int i = 0; i < measure; i++) {
            metrics.reset();
            long t0 = System.nanoTime();
            double r = op.getAsDouble();
            double secs = (System.nanoTime() - t0) / 1e9;
            samples.add(secs);
            long execMs = metrics.executorRunMs.get();
            double wallMs = secs * 1000.0;
            double ratio = execMs > 0 ? wallMs / execMs : Double.NaN;
            ratios.add(ratio);
            System.out.printf(Locale.ROOT,
                "sample,approach=%s,iter=%d,elapsed_seconds=%.3f,result=%.6f,"
                + "executor_run_ms=%d,jvm_gc_ms=%d,shuffle_read_bytes=%d,shuffle_write_bytes=%d,"
                + "peak_exec_mem=%d,wall_over_exec=%.3f%n",
                label, i + 1, secs, r,
                execMs, metrics.jvmGcMs.get(),
                metrics.shuffleReadBytes.get(), metrics.shuffleWriteBytes.get(),
                metrics.peakExecutionMemory.get(), ratio);
        }
        printSummary(label, samples, ratios);
    }

    private static void printSummary(String label, List<Double> samples, List<Double> ratios) {
        double[] a = samples.stream().mapToDouble(Double::doubleValue).sorted().toArray();
        int n = a.length;
        double sum = 0;
        for (double v : a) sum += v;
        double mean = sum / n;
        double var = 0;
        for (double v : a) var += (v - mean) * (v - mean);
        double sd = n > 1 ? Math.sqrt(var / (n - 1)) : 0.0;
        double median = n % 2 == 1 ? a[n / 2] : (a[n / 2 - 1] + a[n / 2]) / 2.0;
        double ratioSum = 0;
        int ratioN = 0;
        for (double v : ratios) if (!Double.isNaN(v)) { ratioSum += v; ratioN++; }
        double meanRatio = ratioN > 0 ? ratioSum / ratioN : Double.NaN;
        System.out.printf(Locale.ROOT,
            "summary,approach=%s,n=%d,mean_s=%.3f,stddev_s=%.3f,min_s=%.3f,median_s=%.3f,max_s=%.3f,"
            + "mean_wall_over_exec=%.3f%n",
            label, n, mean, sd, a[0], median, a[n - 1], meanRatio);
    }

    private static int intArg(String[] args, String key, int def) {
        for (int i = 0; i < args.length - 1; i++) {
            if (args[i].equals(key)) {
                try { return Integer.parseInt(args[i + 1]); }
                catch (NumberFormatException e) { return def; }
            }
        }
        return def;
    }

    private static boolean filter(String[] args, String tag) {
        List<String> tags = Arrays.asList("rdd", "df", "dfparquet", "dfinfer", "sql", "dsparquet", "udfgroupby");
        String only = System.getenv().getOrDefault("SPARK_ONLY", "").trim();
        if (only.startsWith("${")) only = "";
        if (!only.isEmpty()) {
            List<String> requested = Arrays.asList(only.split(","));
            return requested.contains(tag);
        }
        boolean anyTag = Arrays.stream(args).anyMatch(tags::contains);
        if (!anyTag) return true;
        return Arrays.asList(args).contains(tag);
    }

    /**
     * Agrega métricas por task e reinicia entre execuções, expondo totais para
     * o driver imprimir junto do wallclock.
     */
    private static final class MetricsListener extends SparkListener {
        final AtomicLong executorRunMs = new AtomicLong();
        final AtomicLong jvmGcMs = new AtomicLong();
        final AtomicLong shuffleReadBytes = new AtomicLong();
        final AtomicLong shuffleWriteBytes = new AtomicLong();
        final AtomicLong peakExecutionMemory = new AtomicLong();

        void reset() {
            executorRunMs.set(0);
            jvmGcMs.set(0);
            shuffleReadBytes.set(0);
            shuffleWriteBytes.set(0);
            peakExecutionMemory.set(0);
        }

        @Override
        public void onTaskEnd(SparkListenerTaskEnd taskEnd) {
            var m = taskEnd.taskMetrics();
            if (m == null) return;
            executorRunMs.addAndGet(m.executorRunTime());
            jvmGcMs.addAndGet(m.jvmGCTime());
            shuffleReadBytes.addAndGet(m.shuffleReadMetrics().totalBytesRead());
            shuffleWriteBytes.addAndGet(m.shuffleWriteMetrics().bytesWritten());
            long peak = m.peakExecutionMemory();
            peakExecutionMemory.updateAndGet(prev -> Math.max(prev, peak));
        }

        @Override
        public void onJobEnd(SparkListenerJobEnd jobEnd) { /* nada, agregação é por task */ }
    }
}
