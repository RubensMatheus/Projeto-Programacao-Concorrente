package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

/**
 * Abordagem 2: DataFrame + CSV, SQL puro.
 *
 * Expressa o IDW como agregação SQL: {@code sum(w*v) / sum(w)}, onde
 * {@code w = 1 / d^2} e {@code d} é a distância Haversine. Passa por
 * Catalyst (otimizador) e Tungsten (execução colunar off-heap com code-gen).
 * Isola o ganho de arquitetura SQL sobre RDD com o mesmo formato de entrada.
 */
public final class IDWSparkDataFrameImpl {

    private static final double EARTH_RADIUS = 6378.1;

    /**
     * Executa o IDW via SQL puro sobre CSV.
     *
     * @param spark sessão Spark ativa
     * @param xq    longitude do ponto de consulta
     * @param yq    latitude do ponto de consulta
     * @return IDW interpolado
     */
    public double execute(SparkSession spark, double xq, double yq) {
        Row result = plan(spark, xq, yq).first();
        return result.getDouble(0) / result.getDouble(1);
    }

    /** Constrói a agregação SQL sem executar. Usado por {@link IDWSparkExplain}. */
    public Dataset<Row> plan(SparkSession spark, double xq, double yq) {
        StructType schema = new StructType()
                .add("latitude",  DataTypes.DoubleType, false)
                .add("longitude", DataTypes.DoubleType, false)
                .add("valor",     DataTypes.DoubleType, false);

        Dataset<Row> df = spark.read()
                .option("header", "false")
                .schema(schema)
                .csv(SparkQueryConfig.DATASET_CSV);

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
