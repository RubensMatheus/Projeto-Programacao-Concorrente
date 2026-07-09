package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

import static org.apache.spark.sql.functions.*;

/**
 * Abordagem 5: DataFrame + Parquet (SQL puro).
 *
 * Igual à {@link IDWSparkDataFrameImpl}, mas lê Parquet em vez de CSV. Mantém
 * a API DataFrame constante para isolar o efeito puro do formato colunar,
 * fechando a matriz "DataFrame com texto e binário" pedida pelo slide da
 * Aula 1. Diferente da {@link IDWSparkDatasetParquetImpl}, aqui a leitura
 * retorna {@code Dataset<Row>} untyped e a agregação usa expressões SQL.
 */
public final class IDWSparkDataFrameParquetImpl {

    private static final double EARTH_RADIUS = 6378.1;

    public double execute(SparkSession spark, double xq, double yq) {
        Row result = plan(spark, xq, yq).first();
        return result.getDouble(0) / result.getDouble(1);
    }

    public Dataset<Row> plan(SparkSession spark, double xq, double yq) {
        Dataset<Row> df = spark.read()
                .parquet(SparkQueryConfig.DATASET_PARQUET);

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
