package br.ufrn.imd.spark;

import org.apache.spark.sql.SparkSession;

/**
 * Smoke test de compatibilidade Spark 3.5.x com JDK 26 preview.
 * Objetivo: confirmar que a JVM consegue instanciar uma SparkSession local
 * antes de escrevermos as 4 impls IDW em Spark.
 */
public class SparkHelloWorld {
    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("SparkHelloWorld")
                .master("local[*]")
                .getOrCreate();

        System.out.println("Spark version: " + spark.version());
        System.out.println("Default parallelism: " + spark.sparkContext().defaultParallelism());

        long count = spark.range(1, 1_000_001).count();
        System.out.println("Contagem 1..1_000_000 via spark.range: " + count);

        spark.stop();
    }
}
