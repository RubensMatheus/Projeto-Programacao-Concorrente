package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWStructuredConcurrencyImpl;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Etapa 2, benchmark JMH isolado da estratégia Structured Concurrency (JEP 505).
 *
 * Arquivo próprio, fora de {@code IDWFullProcessBenchmark}, para não
 * re-executar os cenários da Etapa 1.
 *
 * Rodar apenas este benchmark:
 * <pre>{@code
 *   java -jar target/benchmarks.jar IDWStructuredConcurrency
 * }</pre>
 *
 * Variantes ({@code @Param variant}):
 * <ul>
 *   <li>{@code CPU_PLATFORM}: política padrão da Etapa 2, subtasks em Platform.</li>
 *   <li>{@code CPU_VIRTUAL}: contraste, subtasks em Virtual (default histórico
 *       de {@code StructuredTaskScope}). Mede o custo do scheduler Loom em
 *       workload CPU-bound puro.</li>
 * </ul>
 *
 * Em ambas as variantes a fase IO é feita fora do escopo estruturado, via
 * {@code CsvDatasetReader} com Virtual Threads.
 */
@State(Scope.Benchmark)
public class IDWStructuredConcurrencyBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;
    private IDWStructuredConcurrencyImpl impl;

    @Param({"CPU_PLATFORM", "CPU_VIRTUAL"})
    public String variant;

    /** Inicializa estado compartilhado uma vez por trial. */
    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        impl = new IDWStructuredConcurrencyImpl();
    }

    /**
     * Mede o pipeline completo (IO virtual + cálculo em StructuredTaskScope)
     * para a variante corrente.
     *
     * @param bh blackhole (impede DCE do resultado)
     * @throws Exception se qualquer etapa falhar
     */
    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void structuredConcurrency(Blackhole bh) throws Exception {
        bh.consume(impl.executeFullProcess(DATASET_PATH, xq, yq, configFor(variant)));
    }

    /**
     * @param variant chave do {@code @Param}
     * @return config com IO virtual e {@code computeThreadType} conforme a variante
     */
    private static ExecutionConfig configFor(String variant) {
        ThreadType cpu = switch (variant) {
            case "CPU_PLATFORM" -> ThreadType.PLATFORM;
            case "CPU_VIRTUAL"  -> ThreadType.VIRTUAL;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        return new ExecutionConfig(
                "StructuredConcurrency_" + variant,
                ThreadType.VIRTUAL, BenchmarkConfig.IO_THREADS,
                cpu, BenchmarkConfig.COMPUTE_THREADS,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        );
    }
}
