package br.ufrn.imd.spark;

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.SparkSession;
import scala.Tuple2;

/**
 * Abordagem 1: RDD + CSV, {@code mapPartitions} + {@code reduce}.
 *
 * API funcional de baixo nível: parsing manual linha a linha, sem esquema,
 * sem otimizador Catalyst. {@code mapPartitions} calcula agregado parcial
 * {@code (num, den)} por partição; {@code reduce} combina associativamente.
 * Sem shuffle (redução em árvore no driver).
 *
 * Serve de baseline "Spark cru" para o comparativo cruzado da Etapa 2.
 */
public final class IDWSparkRDDImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    /**
     * Executa o IDW usando RDD sobre CSV de texto.
     *
     * @param spark sessão Spark ativa
     * @param xq    longitude do ponto de consulta
     * @param yq    latitude do ponto de consulta
     * @return IDW interpolado
     */
    public double execute(SparkSession spark, double xq, double yq) {
        JavaRDD<String> lines = spark.sparkContext()
                .textFile(SparkQueryConfig.DATASET_CSV, spark.sparkContext().defaultParallelism())
                .toJavaRDD();

        Tuple2<Double, Double> agg = lines.mapPartitions(iter -> {
            double num = 0.0;
            double den = 0.0;
            while (iter.hasNext()) {
                String[] parts = iter.next().split(",");
                double lat  = Double.parseDouble(parts[0]);
                double lon  = Double.parseDouble(parts[1]);
                double val  = Double.parseDouble(parts[2]);
                double d = haversine(lon, lat, xq, yq);
                if (d == 0.0) continue;
                double w = 1.0 / (d * d);
                num += w * val;
                den += w;
            }
            return java.util.List.of(new Tuple2<>(num, den)).iterator();
        }).reduce((a, b) -> new Tuple2<>(a._1() + b._1(), a._2() + b._2()));

        return agg._1() / agg._2();
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
