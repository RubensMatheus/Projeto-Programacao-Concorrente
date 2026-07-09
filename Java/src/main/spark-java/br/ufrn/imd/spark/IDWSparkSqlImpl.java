package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.StructType;

import java.util.Locale;

/**
 * Abordagem 6: DataFrame + CSV com Spark SQL literal via TempView.
 *
 * Mesmo pipeline lógico do cenário 3 ({@link IDWSparkDataFrameImpl}), mas
 * expresso via {@code createOrReplaceTempView} + {@code spark.sql("SELECT ...")}
 * em vez da DataFrame API. Objetivo pedagógico: provar empiricamente que
 * Catalyst gera o mesmo plano físico para as duas sintaxes.
 */
public final class IDWSparkSqlImpl {

    private static final double EARTH_RADIUS = 6378.1;

    public double execute(SparkSession spark, double xq, double yq) {
        Row result = plan(spark, xq, yq).first();
        return result.getDouble(0) / result.getDouble(1);
    }

    public Dataset<Row> plan(SparkSession spark, double xq, double yq) {
        StructType schema = new StructType()
                .add("latitude",  DataTypes.DoubleType, false)
                .add("longitude", DataTypes.DoubleType, false)
                .add("valor",     DataTypes.DoubleType, false);

        Dataset<Row> df = spark.read()
                .option("header", "false")
                .schema(schema)
                .csv(SparkQueryConfig.DATASET_CSV);

        df.createOrReplaceTempView("sensores");

        double radian = Math.PI / 180;
        double yqRad  = yq * radian;

        String query = String.format(Locale.ROOT,
                "SELECT SUM(w * valor) AS num, SUM(w) AS den FROM (" +
                "  SELECT valor, 1.0 / (d * d) AS w FROM (" +
                "    SELECT valor," +
                "           %1$.15f * 2 * atan2(sqrt(a), sqrt(1 - a)) AS d" +
                "    FROM (" +
                "      SELECT valor," +
                "             pow(sin(((latitude - (%2$.15f)) * %3$.15f) / 2), 2)" +
                "             + cos(latitude * %3$.15f) * cos(%4$.15f)" +
                "               * pow(sin(((longitude - (%5$.15f)) * %3$.15f) / 2), 2) AS a" +
                "      FROM sensores" +
                "    )" +
                "  ) WHERE d <> 0.0" +
                ")",
                EARTH_RADIUS, yq, radian, yqRad, xq);

        return spark.sql(query);
    }
}
