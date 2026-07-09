package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWForkJoinImpl;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Etapa 2, benchmark JMH isolado da estratégia ForkJoin Framework.
 *
 * Arquivo próprio, fora de {@code IDWFullProcessBenchmark}, para não
 * re-executar os cenários da Etapa 1.
 *
 * Rodar apenas este benchmark:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWForkJoin
 * }</pre>
 *
 * Rodar com GC específico:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWForkJoin -jvmArgs "-XX:+UseZGC"
 * }</pre>
 *
 * Variantes ({@code @Param variant}):
 * <ul>
 *   <li>{@code COARSE}: {@code splitFactor = 1}, ~1 folha por worker. Menor
 *       overhead de fork, pior balanceamento em workload heterogêneo.</li>
 *   <li>{@code FINE}: {@code splitFactor = 32}, muitas folhas pequenas.
 *       Overhead maior, melhor uso do work-stealing.</li>
 * </ul>
 */
@State(Scope.Benchmark)
public class IDWForkJoinBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;
    private IDWForkJoinImpl impl;

    @Param({"COARSE", "FINE"})
    public String variant;

    /** Inicializa estado compartilhado uma vez por trial. */
    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        impl = new IDWForkJoinImpl();
    }

    /**
     * Mede o pipeline completo (IO virtual + cálculo em fork-join custom pool)
     * para a variante corrente.
     *
     * @param bh blackhole (impede DCE do resultado)
     * @throws Exception se leitura ou tarefa falhar
     */
    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void forkJoin(Blackhole bh) throws Exception {
        int splitFactor = switch (variant) {
            case "COARSE" -> 1;
            case "FINE"   -> 32;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        bh.consume(impl.executeFullProcess(DATASET_PATH, xq, yq, config(), splitFactor));
    }

    /**
     * @return {@link ExecutionConfig} com IO virtual e paralelismo compute =
     *         {@code BenchmarkConfig.COMPUTE_THREADS}.
     */
    private static ExecutionConfig config() {
        return new ExecutionConfig(
                "ForkJoin",
                ThreadType.VIRTUAL, BenchmarkConfig.IO_THREADS,
                ThreadType.PLATFORM, BenchmarkConfig.COMPUTE_THREADS,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        );
    }
}
