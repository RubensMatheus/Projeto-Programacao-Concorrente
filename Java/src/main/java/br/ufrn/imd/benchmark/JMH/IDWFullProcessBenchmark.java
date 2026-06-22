package br.ufrn.imd.benchmark.JMH;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.*;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Benchmark JMH do pipeline completo IDW para 1 ponto de consulta (Estratégia E):
 * leitura do CSV + interpolação, em cada um dos 10 cenários do projeto.
 *
 * Os parâmetros de threads/chunk vêm de BenchmarkConfig, mantendo coerência
 * com os demais pontos de medição (Main e JMeter).
 */
@State(Scope.Benchmark)
public class IDWFullProcessBenchmark {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private double xq;
    private double yq;

    private IDWConcurrentBase concurrent;
    private IDWSerialImpl serial;
    private IDWProducerConsumerImpl producerConsumer;
    private CsvDatasetReader reader;

    @Param({
            "SERIAL",
            "PLATFORM_PLATFORM",
            "VIRTUAL_VIRTUAL",
            "PLATFORM_VIRTUAL",
            "VIRTUAL_PLATFORM",
            "MUTEX_VIRTUAL_PLATFORM",
            "SEMAPHORE_VIRTUAL_PLATFORM",
            "VOLATILE_VIRTUAL_PLATFORM",
            "ATOMIC_VIRTUAL_PLATFORM",
            "PRODUCER_CONSUMER"
    })
    public String scenario;

    /** Inicializa estado compartilhado uma vez por trial: query point e instâncias. */
    @Setup(Level.Trial)
    public void setup() {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        concurrent = createImpl(scenario);
        serial = new IDWSerialImpl();
        producerConsumer = new IDWProducerConsumerImpl();
        reader = new CsvDatasetReader();
    }

    /**
     * Mede o pipeline completo (IO + cálculo) para o cenário corrente.
     *
     * @param bh blackhole do JMH (impede que o JIT elimine o resultado)
     * @throws Exception se a execução falhar
     */
    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void fullProcessBenchmark(Blackhole bh) throws Exception {
        if (scenario.equals("SERIAL")) {
            DataSet dataSet = reader.read(DATASET_PATH, serialConfig());
            bh.consume(serial.executeComputation(dataSet, xq, yq));
            return;
        }

        ExecutionConfig config = configFromScenario(scenario);

        if (scenario.equals("PRODUCER_CONSUMER")) {
            DataSet dataSet = reader.read(DATASET_PATH, config);
            bh.consume(producerConsumer.execute(dataSet, xq, yq, config));
            return;
        }

        bh.consume(concurrent.executeFullProcess(DATASET_PATH, xq, yq, config));
    }

    /**
     * Fábrica de implementações concorrentes baseada no nome do cenário.
     *
     * @param scenario chave do {@code @Param}
     * @return instância pronta da implementação correspondente
     */
    private static IDWConcurrentBase createImpl(String scenario) {
        return switch (scenario) {
            case "MUTEX_VIRTUAL_PLATFORM"     -> new IDWMutexImpl();
            case "SEMAPHORE_VIRTUAL_PLATFORM" -> new IDWSemaphoreImpl();
            case "VOLATILE_VIRTUAL_PLATFORM"  -> new IDWVolatileImpl();
            case "ATOMIC_VIRTUAL_PLATFORM"    -> new IDWAtomicImpl();
            default                            -> new IDWNoneImpl();
        };
    }

    /** @return {@link ExecutionConfig} mínima usada para o cenário SERIAL. */
    private ExecutionConfig serialConfig() {
        return new ExecutionConfig(
                "Serial",
                ThreadType.PLATFORM, BenchmarkConfig.IO_THREADS,
                ThreadType.PLATFORM, 1,
                SyncType.NONE, BenchmarkConfig.CHUNK_SIZE
        );
    }

    /**
     * Traduz o nome do cenário em {@link ExecutionConfig} concreta.
     *
     * @param scenario chave do {@code @Param}
     * @return config equivalente ao cenário da spec
     */
    private ExecutionConfig configFromScenario(String scenario) {
        return switch (scenario) {
            case "PLATFORM_PLATFORM" -> cfg(scenario, ThreadType.PLATFORM, ThreadType.PLATFORM, SyncType.NONE);
            case "VIRTUAL_VIRTUAL"   -> cfg(scenario, ThreadType.VIRTUAL,  ThreadType.VIRTUAL,  SyncType.NONE);
            case "PLATFORM_VIRTUAL"  -> cfg(scenario, ThreadType.PLATFORM, ThreadType.VIRTUAL,  SyncType.NONE);
            case "VIRTUAL_PLATFORM"  -> cfg(scenario, ThreadType.VIRTUAL,  ThreadType.PLATFORM, SyncType.NONE);
            case "MUTEX_VIRTUAL_PLATFORM"     -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.MUTEX);
            case "SEMAPHORE_VIRTUAL_PLATFORM" -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.SEMAPHORE);
            case "VOLATILE_VIRTUAL_PLATFORM"  -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.VOLATILE);
            case "ATOMIC_VIRTUAL_PLATFORM"    -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.ATOMIC);
            case "PRODUCER_CONSUMER"          -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.NONE);
            default -> throw new IllegalArgumentException("Cenário inválido: " + scenario);
        };
    }

    /**
     * Helper para montar configs usando as constantes de {@link BenchmarkConfig}.
     *
     * @param name    rótulo do cenário
     * @param io      tipo de thread da fase IO
     * @param compute tipo de thread da fase compute
     * @param sync    estratégia de sincronização
     * @return config pronta
     */
    private ExecutionConfig cfg(String name, ThreadType io, ThreadType compute, SyncType sync) {
        return new ExecutionConfig(
                name,
                io, BenchmarkConfig.IO_THREADS,
                compute, BenchmarkConfig.COMPUTE_THREADS,
                sync, BenchmarkConfig.CHUNK_SIZE
        );
    }
}
