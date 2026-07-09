package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

import static org.apache.spark.sql.functions.*;

/**
 * Abordagem 2b: DataFrame + CSV com {@code inferSchema=true}.
 *
 * Idêntica à {@link IDWSparkDataFrameImpl}, mas em vez de declarar o
 * {@code StructType} explicitamente, delega ao Spark a descoberta dos tipos
 * das colunas. Isola o custo da passada extra de inferência sobre o CSV.
 */
public final class IDWSparkDataFrameInferImpl {

    private static final double EARTH_RADIUS = 6378.1;

    public double execute(SparkSession spark, double xq, double yq) {
        Row result = plan(spark, xq, yq).first();
        return result.getDouble(0) / result.getDouble(1);
    }

    public Dataset<Row> plan(SparkSession spark, double xq, double yq) {
        Dataset<Row> raw = spark.read()
                .option("header", "false")
                .option("inferSchema", "true")
                .csv(SparkQueryConfig.DATASET_CSV);

        Dataset<Row> df = raw
                .withColumnRenamed(raw.columns()[0], "latitude")
                .withColumnRenamed(raw.columns()[1], "longitude")
                .withColumnRenamed(raw.columns()[2], "valor");

        double radian = Math.PI / 180;

        Dataset<Row> withDist = df
                .withColumn("dlat", (col("latitude").minus(lit(yq))).multiply(lit(radian)))
                .withColumn("dlon", (col("longitude").minus(lit(xq))).multiply(lit(radian)))
                .withColumn("a",
                        pow(sin(col("dlat").divide(2)), 2)
                                .plus(cos(col("latitude").multiply(lit(radian)))
                                        .multiply(cos(lit(yq * radian)))
                                        .multiply(pow(sin(col("dlon").divide(2)), 2))))
                .withColumn("d",
                        lit(EARTH_RADIUS).multiply(lit(2))
                                .multiply(atan2(sqrt(col("a")), sqrt(lit(1).minus(col("a"))))))
                .filter(col("d").notEqual(lit(0.0)))
                .withColumn("w", lit(1.0).divide(col("d").multiply(col("d"))));

        return withDist.agg(
                sum(col("w").multiply(col("valor"))).alias("num"),
                sum(col("w")).alias("den"));
    }
}
