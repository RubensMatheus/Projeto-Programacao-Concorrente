package br.ufrn.imd.model;

/**
 * Conjunto de sensores carregado em memória. Os três arrays são paralelos:
 * o sensor de índice {@code i} tem coordenada {@code (latitudes[i], longitudes[i])}
 * e temperatura {@code values[i]}. Uso de {@code double[]} (sem boxing) é
 * essencial para o desempenho do loop de cálculo.
 *
 * @param latitudes  latitudes dos sensores em graus (-90 a 90)
 * @param longitudes longitudes dos sensores em graus (-180 a 180)
 * @param values     valores medidos (temperatura em °C)
 */
public record DataSet(
        double[] latitudes,
        double[] longitudes,
        double[] values
) {
}
