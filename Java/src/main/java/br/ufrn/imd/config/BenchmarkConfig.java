package br.ufrn.imd.config;

/**
 * Constantes globais de configuração dos benchmarks.
 *
 * Centraliza o número de threads de cálculo e o tamanho de chunk usados pelos
 * cenários, evitando duplicação e facilitando ajustes finos para o ambiente
 * de medição (MacBook Air M4, 10 cores).
 */
public final class BenchmarkConfig {

    /** Núcleos lógicos reportados pela JVM no host atual (informativo). */
    public static final int AVAILABLE_CORES = Runtime.getRuntime().availableProcessors();

    /**
     * Threads usadas na fase de cálculo IDW.
     *
     * Valor fixado em 10 a partir da calibragem ({@code IDWCalibrationBenchmark}):
     * varredura em {4,8,10,12,14,16,20} no MacBook Air M4 mostrou curva quase plana
     * (spread ~3,7%, IO-bound), com mínimo em 10 — coincide com o nº de cores
     * físicos do host (4P + 6E), sem oversubscription.
     */
    public static final int COMPUTE_THREADS = 10;

    /** Threads usadas na leitura paralela do CSV. */
    public static final int IO_THREADS = 2;

    /** Tamanho de chunk para particionamento (usado por Producer-Consumer e como hint). */
    public static final int CHUNK_SIZE = 20;

    /**
     * Ponto de consulta fixo do IDW (Estratégia E: 1 ponto).
     * Coordenadas próximas a Natal-RN com 7ª casa decimal {@code 5} — garante
     * que nenhum sensor da grade (gerado com 6 casas decimais) coincida
     * exatamente, evitando {@code distância == 0} no IDW.
     * Estes mesmos valores devem ser usados no projeto Ruby para que os
     * resultados sejam comparáveis entre linguagens.
     */
    public static final double QUERY_LONGITUDE = -35.2110235;
    public static final double QUERY_LATITUDE  = -5.7945675;

    private BenchmarkConfig() {}
}
