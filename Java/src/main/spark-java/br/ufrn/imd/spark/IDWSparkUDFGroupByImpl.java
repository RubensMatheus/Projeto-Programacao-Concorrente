package br.ufrn.imd.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.api.java.UDF4;
import org.apache.spark.sql.expressions.UserDefinedFunction;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.StructType;

import java.util.ArrayList;
import java.util.List;

import static org.apache.spark.sql.functions.*;

/**
 * DataFrame + UDF Haversine + {@code groupBy} com shuffle. Isola o custo de UDF
 * (Catalyst não otimiza dentro da caixa preta) somado ao de um shuffle explícito
 * por {@code query_id}. Só faz sentido com múltiplos pontos de consulta; com um
 * ponto único o groupBy fica trivial.
 */
public final class IDWSparkUDFGroupByImpl {

    private static final double EARTH_RADIUS = 6378.1;

    public double execute(SparkSession spark, double[][] queries) {
        Row summary = plan(spark, queries).agg(avg("idw").alias("mean_idw")).first();
        return summary.getDouble(0);
    }

    public Dataset<Row> plan(SparkSession spark, double[][] queries) {
        UDF4<Double, Double, Double, Double, Double> weightUdf =
                (lat, lon, qLon, qLat) -> {
                    double radian = Math.PI / 180;
                    double dlon = (qLon - lon) * radian;
                    double dlat = (qLat - lat) * radian;
                    double a = Math.pow(Math.sin(dlat / 2), 2)
                            + Math.cos(lat * radian) * Math.cos(qLat * radian)
                            * Math.pow(Math.sin(dlon / 2), 2);
                    double d = EARTH_RADIUS * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    if (d == 0.0) return 0.0;
                    return 1.0 / (d * d);
                };
        UserDefinedFunction weight = udf(weightUdf, DataTypes.DoubleType)
                .withName("haversine_weight");
        spark.udf().register("haversine_weight", weight);

        StructType sensorSchema = new StructType()
                .add("latitude",  DataTypes.DoubleType, false)
                .add("longitude", DataTypes.DoubleType, false)
                .add("valor",     DataTypes.DoubleType, false);
        Dataset<Row> sensores = spark.read()
                .option("header", "false")
                .schema(sensorSchema)
                .csv(SparkQueryConfig.DATASET_CSV);

        List<Row> queryRows = new ArrayList<>();
        for (int i = 0; i < queries.length; i++) {
            queryRows.add(org.apache.spark.sql.RowFactory.create(i, queries[i][0], queries[i][1]));
        }
        StructType querySchema = new StructType()
                .add("query_id",  DataTypes.IntegerType, false)
                .add("query_lon", DataTypes.DoubleType,  false)
                .add("query_lat", DataTypes.DoubleType,  false);
        Dataset<Row> queriesDf = spark.createDataFrame(queryRows, querySchema);

        Dataset<Row> joined = sensores.crossJoin(queriesDf)
                .withColumn("w", weight.apply(
                        col("latitude"), col("longitude"),
                        col("query_lon"), col("query_lat")))
                .filter(col("w").notEqual(lit(0.0)));

        Dataset<Row> aggregated = joined.groupBy(col("query_id"))
                .agg(
                        sum(col("w").multiply(col("valor"))).alias("num"),
                        sum(col("w")).alias("den"));

        return aggregated.select(
                col("query_id"),
                col("num").divide(col("den")).alias("idw"));
    }
}
