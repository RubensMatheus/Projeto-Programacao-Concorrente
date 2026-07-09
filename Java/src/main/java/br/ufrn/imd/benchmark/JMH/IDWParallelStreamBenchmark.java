package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWParallelStreamImpl;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Etapa 2, benchmark JMH isolado da estratégia Parallel Streams.
 *
 * Vive em arquivo próprio, fora de {@code IDWFullProcessBenchmark}, para não
 * re-executar os cenários já medidos na Etapa 1.
 *
 * Rodar apenas este benchmark:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWParallelStream
 * }</pre>
 *
 * Rodar com um GC específico:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWParallelStream -jvmArgs "-XX:+UseZGC"
 * }</pre>
 *
 * Variantes ({@code @Param variant}):
 * <ul>
 *   <li>{@code COMMON_POOL}: parallel stream roda no {@code ForkJoinPool.commonPool}
 *       padrão da JVM. Referência para a experiência "fora da caixa".</li>
 *   <li>{@code CUSTOM_POOL}: stream submetido dentro de um {@code ForkJoinPool}
 *       com paralelismo {@code BenchmarkConfig.COMPUTE_THREADS}, casando com o
 *       grau usado pelas impls da Etapa 1 para comparação direta.</li>
 * </ul>
 */
@State(Scope.Benchmark)
public class IDWParallelStreamBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;
    private IDWParallelStreamImpl impl;

    @Param({"COMMON_POOL", "CUSTOM_POOL"})
    public String variant;

    /** Inicializa estado compartilhado uma vez por trial. */
    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        impl = new IDWParallelStreamImpl();
    }

    /**
     * Mede o pipeline completo (IO virtual + cálculo em parallel stream)
     * para a variante corrente.
     *
     * @param bh blackhole (impede DCE do resultado)
     * @throws Exception se a leitura ou o stream falhar
     */
    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void parallelStream(Blackhole bh) throws Exception {
        bh.consume(impl.executeFullProcess(DATASET_PATH, xq, yq, configFor(variant)));
    }

    /**
     * Traduz o nome da variante em {@link ExecutionConfig}.
     *
     * @param variant chave do {@code @Param}
     * @return config com IO virtual (política Etapa 2) e paralelismo apropriado
     */
    private static ExecutionConfig configFor(String variant) {
        int compute = switch (variant) {
            case "COMMON_POOL" -> 0;
            case "CUSTOM_POOL" -> BenchmarkConfig.COMPUTE_THREADS;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        return new ExecutionConfig(
                "ParallelStream_" + variant,
                ThreadType.VIRTUAL, BenchmarkConfig.IO_THREADS,
                ThreadType.PLATFORM, compute,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        );
    }
}
