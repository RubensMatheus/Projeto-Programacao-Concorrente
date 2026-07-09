package br.ufrn.imd.spark;

import org.apache.spark.api.java.function.MapPartitionsFunction;
import org.apache.spark.api.java.function.ReduceFunction;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Encoders;
import org.apache.spark.sql.SparkSession;
import scala.Tuple2;

import java.util.Iterator;
import java.util.List;

/**
 * Abordagem 3: {@code Dataset<Sensor>} + Parquet, {@code mapPartitions} tipado.
 *
 * Isola o ganho de FORMATO (Parquet colunar binário) mantendo estilo de
 * execução imperativo dentro da partição. Encoder tipado ({@link Sensor})
 * elimina custo de {@code Row.getDouble()} do cenário DataFrame.
 *
 * Requer que {@code sensores.parquet} exista, gerar antes com
 * {@link CsvToParquet}.
 */
public final class IDWSparkDatasetParquetImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    /**
     * Executa o IDW sobre {@code Dataset<Sensor>} lido de Parquet.
     *
     * @param spark sessão Spark ativa
     * @param xq    longitude do ponto de consulta
     * @param yq    latitude do ponto de consulta
     * @return IDW interpolado
     */
    public double execute(SparkSession spark, double xq, double yq) {
        Dataset<Tuple2<Double, Double>> partials = plan(spark, xq, yq);
        ReduceFunction<Tuple2<Double, Double>> combiner =
                (a, b) -> new Tuple2<>(a._1() + b._1(), a._2() + b._2());
        Tuple2<Double, Double> agg = partials.reduce(combiner);
        return agg._1() / agg._2();
    }

    /** Constrói o {@code mapPartitions} tipado sem executar. Usado por {@link IDWSparkExplain}. */
    public Dataset<Tuple2<Double, Double>> plan(SparkSession spark, double xq, double yq) {
        Dataset<Sensor> sensores = spark.read()
                .parquet(SparkQueryConfig.DATASET_PARQUET)
                .as(Encoders.bean(Sensor.class));

        MapPartitionsFunction<Sensor, Tuple2<Double, Double>> partitionAgg = iter -> {
            double num = 0.0;
            double den = 0.0;
            while (iter.hasNext()) {
                Sensor s = iter.next();
                double d = haversine(s.longitude(), s.latitude(), xq, yq);
                if (d == 0.0) continue;
                double w = 1.0 / (d * d);
                num += w * s.valor();
                den += w;
            }
            return List.<Tuple2<Double, Double>>of(new Tuple2<>(num, den)).iterator();
        };

        return sensores.mapPartitions(
                partitionAgg,
                Encoders.tuple(Encoders.DOUBLE(), Encoders.DOUBLE()));
    }

    private static double haversine(double lon1, double lat1, double lon2, double lat2) {
        double dlon = (lon2 - lon1) * RADIAN;
        double dlat = (lat2 - lat1) * RADIAN;
        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1 * RADIAN) * Math.cos(lat2 * RADIAN)
                * Math.pow(Math.sin(dlon / 2), 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return EARTH_RADIUS * c;
    }
}
