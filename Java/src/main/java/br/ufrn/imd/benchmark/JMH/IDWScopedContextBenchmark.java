package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWScopedContextImpl;
import br.ufrn.imd.core.IDWScopedContextImpl.ContextMode;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Etapa 2, benchmark JMH do cenário dedicado {@code ScopedValue vs ThreadLocal}.
 *
 * Isola a variável "veículo de contexto" cruzando com o tipo de thread para
 * expor onde o custo aparece: {@link InheritableThreadLocal} paga cópia por
 * fork, {@link ScopedValue} não.
 *
 * Rodar apenas este benchmark:
 * <pre>{@code
 *   java --enable-preview -jar target/benchmarks.jar IDWScopedContext
 * }</pre>
 *
 * Variantes ({@code @Param variant}, 4 no total):
 * <ul>
 *   <li>{@code THREADLOCAL_PLATFORM}</li>
 *   <li>{@code THREADLOCAL_VIRTUAL}, onde a cópia por herança tende a doer mais</li>
 *   <li>{@code SCOPEDVALUE_PLATFORM}</li>
 *   <li>{@code SCOPEDVALUE_VIRTUAL}, onde o ganho sobre ThreadLocal deve ser observável</li>
 * </ul>
 */
@State(Scope.Benchmark)
public class IDWScopedContextBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;
    private IDWScopedContextImpl impl;

    @Param({"THREADLOCAL_PLATFORM", "THREADLOCAL_VIRTUAL", "SCOPEDVALUE_PLATFORM", "SCOPEDVALUE_VIRTUAL"})
    public String variant;

    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        impl = new IDWScopedContextImpl();
    }

    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void scopedContext(Blackhole bh) throws Exception {
        Config c = parse(variant);
        bh.consume(impl.executeFullProcess(DATASET_PATH, c.config, xq, yq, c.mode));
    }

    /** Par (mode, ExecutionConfig) derivado da string do @Param. */
    private record Config(ContextMode mode, ExecutionConfig config) {}

    private static Config parse(String variant) {
        ContextMode mode = switch (variant) {
            case "THREADLOCAL_PLATFORM", "THREADLOCAL_VIRTUAL" -> ContextMode.THREAD_LOCAL;
            case "SCOPEDVALUE_PLATFORM", "SCOPEDVALUE_VIRTUAL" -> ContextMode.SCOPED_VALUE;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        ThreadType cpu = switch (variant) {
            case "THREADLOCAL_PLATFORM", "SCOPEDVALUE_PLATFORM" -> ThreadType.PLATFORM;
            case "THREADLOCAL_VIRTUAL",  "SCOPEDVALUE_VIRTUAL"  -> ThreadType.VIRTUAL;
            default -> throw new IllegalArgumentException("Variante inválida: " + variant);
        };
        return new Config(mode, new ExecutionConfig(
                "ScopedContext_" + variant,
                ThreadType.VIRTUAL, BenchmarkConfig.IO_THREADS,
                cpu, BenchmarkConfig.COMPUTE_THREADS,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        ));
    }
}
