package br.ufrn.imd.spark;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.execution.ExplainMode;

/**
 * Gera os planos {@code explain("formatted")} das abordagens 17, 18 e 19 e grava
 * cada um em arquivo separado sob
 * {@code benchmark-results/etapa2/spark/explain/}.
 *
 * Não substitui o macrobenchmark: complementa. O objetivo é registrar o plano
 * físico produzido por Catalyst / Tungsten para cada abordagem (WholeStageCodegen,
 * filter pushdown no Parquet, exchange do shuffle no UDF+groupBy), servindo de
 * evidência textual no relatório.
 *
 * Abordagem 16 (RDD) fica de fora: não passa por Catalyst e não tem plano
 * formatado equivalente.
 *
 * Uso:
 * <pre>{@code
 *   export JAVA_HOME=$(/usr/libexec/java_home -v 21)
 *   mvn -Pspark compile
 *   mvn -Pspark exec:java -Dspark.mainClass=br.ufrn.imd.spark.IDWSparkExplain
 * }</pre>
 */
public class IDWSparkExplain {

    private static final String OUT_DIR = "benchmark-results/etapa2/spark/explain";

    public static void main(String[] args) throws Exception {
        Path outDir = Paths.get(OUT_DIR);
        Files.createDirectories(outDir);

        SparkSession spark = SparkSession.builder()
                .appName("IDWSparkExplain")
                .master("local[*]")
                .config("spark.sql.shuffle.partitions", "16")
                .getOrCreate();
        spark.sparkContext().setLogLevel("WARN");

        double xq = SparkQueryConfig.QUERY_LONGITUDE;
        double yq = SparkQueryConfig.QUERY_LATITUDE;

        write(outDir, "dataframe_csv.txt",
              explain(new IDWSparkDataFrameImpl().plan(spark, xq, yq)));

        write(outDir, "dataset_parquet.txt",
              explain(new IDWSparkDatasetParquetImpl().plan(spark, xq, yq).toDF()));

        write(outDir, "udf_groupby_multi.txt",
              explain(new IDWSparkUDFGroupByImpl().plan(spark, SparkQueryConfig.queryPointsMulti())));

        spark.stop();
        System.out.println("Planos gravados em " + outDir.toAbsolutePath());
    }

    private static String explain(Dataset<?> ds) {
        return ds.queryExecution().explainString(ExplainMode.fromString("formatted"));
    }

    private static void write(Path dir, String name, String content) throws Exception {
        Path f = dir.resolve(name);
        Files.writeString(f, content);
        System.out.println("wrote " + f);
    }
}
