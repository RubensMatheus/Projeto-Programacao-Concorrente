package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.StructType;

/**
 * Utilitário one-off que converte {@code ../datasets/sensores.csv} para
 * {@code ../datasets/sensores.parquet}. Rodar UMA VEZ antes do benchmark
 * do cenário Dataset + Parquet.
 *
 * Uso:
 * <pre>{@code
 *   export JAVA_HOME=$(/usr/libexec/java_home -v 21)
 *   mvn -Pspark clean compile
 *   mvn -Pspark exec:java -Dexec.mainClass=br.ufrn.imd.spark.CsvToParquet
 * }</pre>
 */
public class CsvToParquet {

    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("CsvToParquet")
                .master("local[*]")
                .getOrCreate();

        StructType schema = new StructType()
                .add("latitude",  DataTypes.DoubleType, false)
                .add("longitude", DataTypes.DoubleType, false)
                .add("valor",     DataTypes.DoubleType, false);

        Dataset<Row> df = spark.read()
                .option("header", "false")
                .schema(schema)
                .csv(SparkQueryConfig.DATASET_CSV);

        long t0 = System.nanoTime();
        df.write()
                .mode("overwrite")
                .parquet(SparkQueryConfig.DATASET_PARQUET);
        double secs = (System.nanoTime() - t0) / 1e9;

        System.out.printf("parquet_written=%s%n", SparkQueryConfig.DATASET_PARQUET);
        System.out.printf("elapsed_seconds=%.3f%n", secs);

        spark.stop();
    }
}
