package br.ufrn.imd.spark;

/**
 * Constantes do ponto de consulta e caminhos usados pelos benchmarks Spark.
 *
 * Réplica autônoma dos valores de {@code br.ufrn.imd.config.BenchmarkConfig}
 * para manter o profile Spark self-contained (JDK 21) sem depender das classes
 * compiladas em JDK 26. Os valores devem estar sincronizados com o
 * BenchmarkConfig da Etapa 1.
 */
public final class SparkQueryConfig {

    /** Ponto de consulta único (Estratégia E). Sincronizar com BenchmarkConfig. */
    public static final double QUERY_LONGITUDE = -35.2110235;
    public static final double QUERY_LATITUDE  = -5.7945675;

    /** Caminhos relativos ao módulo Java/. */
    public static final String DATASET_CSV     = "../datasets/sensores.csv";
    public static final String DATASET_PARQUET = "../datasets/sensores.parquet";

    /**
     * Quantidade de pontos de consulta gerados para o cenário UDF + groupBy,
     * onde o shuffle só é observável com múltiplos grupos.
     */
    public static final int QUERY_POINTS_MULTI_COUNT = 100;

    /**
     * Gera N pontos de consulta em torno do QUERY_LONGITUDE/QUERY_LATITUDE
     * espalhados em uma grade pequena (delta 0.01 graus, 7ª casa fixa em 5
     * para não colidir com sensores).
     *
     * @return array {@code [N][2]}, colunas {@code [longitude, latitude]}
     */
    public static double[][] queryPointsMulti() {
        double[][] pts = new double[QUERY_POINTS_MULTI_COUNT][2];
        int side = (int) Math.ceil(Math.sqrt(QUERY_POINTS_MULTI_COUNT));
        int i = 0;
        for (int r = 0; r < side && i < QUERY_POINTS_MULTI_COUNT; r++) {
            for (int c = 0; c < side && i < QUERY_POINTS_MULTI_COUNT; c++) {
                pts[i][0] = QUERY_LONGITUDE + (c - side / 2.0) * 0.01;
                pts[i][1] = QUERY_LATITUDE  + (r - side / 2.0) * 0.01;
                i++;
            }
        }
        return pts;
    }

    private SparkQueryConfig() {}
}
