package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWCompletableFutureImpl;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Etapa 2, benchmark JMH isolado da estratégia CompletableFuture.
 *
 * Arquivo próprio, fora de {@code IDWFullProcessBenchmark}, para não
 * re-executar os cenários da Etapa 1.
 *
 * Rodar apenas este benchmark:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWCompletableFuture
 * }</pre>
 *
 * Variantes ({@code @Param variant}):
 * <ul>
 *   <li>{@code IO_VIRTUAL_CPU_PLATFORM}: política padrão da Etapa 2, IO em
 *       Virtual (bloqueio barato) e cálculo em Platform (evita pinning e
 *       overhead do scheduler Loom para CPU-bound puro).</li>
 *   <li>{@code IO_VIRTUAL_CPU_VIRTUAL}: contraste, mesma IO Virtual, mas
 *       cálculo também em Virtual. Serve para medir o custo do scheduler
 *       Loom sobre workload CPU-bound.</li>
 * </ul>
 */
@State(Scope.Benchmark)
public class IDWCompletableFutureBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;
    private IDWCompletableFutureImpl impl;

    @Param({"IO_VIRTUAL_CPU_PLATFORM", "IO_VIRTUAL_CPU_VIRTUAL"})
    public String variant;

    /** Inicializa estado compartilhado uma vez por trial. */
    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        impl = new IDWCompletableFutureImpl();
    }

    /**
     * Mede o pipeline completo (IO + cálculo) em composição CompletableFuture
     * para a variante corrente.
     *
     * @param bh blackhole (impede DCE do resultado)
     * @throws Exception se qualquer etapa falhar
     */
    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void completableFuture(Blackhole bh) throws Exception {
        bh.consume(impl.executeFullProcess(DATASET_PATH, xq, yq, configFor(variant)));
    }

    /**
     * Traduz a variante em {@link ExecutionConfig} com os tipos de thread
     * apropriados por fase.
     *
     * @param variant chave do {@code @Param}
     * @return config pronta
     */
    private static ExecutionConfig configFor(String variant) {
        ThreadType cpu = switch (variant) {
            case "IO_VIRTUAL_CPU_PLATFORM" -> ThreadType.PLATFORM;
            case "IO_VIRTUAL_CPU_VIRTUAL"  -> ThreadType.VIRTUAL;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        return new ExecutionConfig(
                "CompletableFuture_" + variant,
                ThreadType.VIRTUAL, BenchmarkConfig.IO_THREADS,
                cpu, BenchmarkConfig.COMPUTE_THREADS,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        );
    }
}
