package br.ufrn.imd.benchmark.jmeter;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.*;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import java.nio.file.Path;

/**
 * JMeter Java Sampler para macrobenchmark e avaliação de GCs com a
 * Estratégia E (IDW de 1 ponto). Cada sample mede o pipeline completo
 * (IO + cálculo): o CSV é relido a cada iteração para que a fase de IO
 * — que difere entre cenários `PLATFORM` e `VIRTUAL` — entre na métrica
 * e no perfil de GC.
 */
public class IDWJMeterSampler extends AbstractJavaSamplerClient {

    private static final Path DATASET_PATH = Path.of("../datasets/sensores.csv");

    private final CsvDatasetReader reader = new CsvDatasetReader();
    private IDWConcurrentBase idw;
    private IDWProducerConsumerImpl producerConsumer;
    private IDWSerialImpl serial;
    private double xq;
    private double yq;

    /**
     * Expõe o único parâmetro tunável pelo JMeter (cenário).
     * Threads/chunk vêm de {@link BenchmarkConfig}.
     */
    @Override
    public Arguments getDefaultParameters() {
        Arguments args = new Arguments();
        args.addArgument("scenario", "PLATFORM_PLATFORM");
        return args;
    }

    /**
     * Instancia a implementação do cenário escolhido. **Não** carrega o
     * dataset aqui — a leitura entra dentro de {@link #runTest} para que
     * o tempo de IO seja parte da métrica.
     *
     * @param ctx contexto JMeter com os parâmetros do sampler
     */
    @Override
    public void setupTest(JavaSamplerContext ctx) {
        xq = BenchmarkConfig.QUERY_LONGITUDE;
        yq = BenchmarkConfig.QUERY_LATITUDE;
        String scenario = ctx.getParameter("scenario", "PLATFORM_PLATFORM");
        idw = createImpl(scenario);
        producerConsumer = scenario.equals("PRODUCER_CONSUMER") ? new IDWProducerConsumerImpl() : null;
        serial = scenario.equals("SERIAL") ? new IDWSerialImpl() : null;
    }

    /**
     * Executa uma amostra do pipeline completo: lê o CSV (fase IO) e
     * roda o IDW (fase compute) com a estratégia do cenário.
     *
     * @param ctx contexto JMeter
     * @return resultado da amostra (sucesso + IDW computado, ou erro)
     */
    @Override
    public SampleResult runTest(JavaSamplerContext ctx) {
        String scenario = ctx.getParameter("scenario", "PLATFORM_PLATFORM");
        ExecutionConfig config = buildConfig(scenario);

        SampleResult result = new SampleResult();
        result.setSampleLabel(scenario);
        result.sampleStart();

        try {
            DataSet dataSet = reader.read(DATASET_PATH, config);
            double computed;
            if (scenario.equals("SERIAL")) {
                computed = serial.executeComputation(dataSet, xq, yq);
            } else if (scenario.equals("PRODUCER_CONSUMER")) {
                computed = producerConsumer.execute(dataSet, xq, yq, config);
            } else {
                computed = idw.executeComputation(dataSet, xq, yq, config);
            }

            result.sampleEnd();
            result.setSuccessful(true);
            result.setResponseCode("200");
            result.setResponseMessage("OK — IDW=" + computed);
        } catch (Exception e) {
            result.sampleEnd();
            result.setSuccessful(false);
            result.setResponseCode("500");
            result.setResponseMessage(e.getMessage());
        }

        return result;
    }

    /**
     * Libera referências por thread JMeter.
     *
     * @param ctx contexto JMeter
     */
    @Override
    public void teardownTest(JavaSamplerContext ctx) {
        idw = null;
        producerConsumer = null;
        serial = null;
    }

    /**
     * @param scenario chave do cenário
     * @return instância da subclasse de {@link IDWConcurrentBase}; {@code null}
     *         para o cenário PRODUCER_CONSUMER (tratado separadamente)
     */
    private static IDWConcurrentBase createImpl(String scenario) {
        return switch (scenario) {
            case "MUTEX_VIRTUAL_PLATFORM"     -> new IDWMutexImpl();
            case "SEMAPHORE_VIRTUAL_PLATFORM" -> new IDWSemaphoreImpl();
            case "VOLATILE_VIRTUAL_PLATFORM"  -> new IDWVolatileImpl();
            case "ATOMIC_VIRTUAL_PLATFORM"    -> new IDWAtomicImpl();
            case "PRODUCER_CONSUMER", "SERIAL" -> null;
            default                            -> new IDWNoneImpl();
        };
    }

    /**
     * Traduz nome do cenário em {@link ExecutionConfig}.
     *
     * @param scenario chave do cenário
     * @return config equivalente
     */
    private ExecutionConfig buildConfig(String scenario) {
        return switch (scenario) {
            case "SERIAL"            -> new ExecutionConfig("Serial",
                                            ThreadType.PLATFORM, BenchmarkConfig.IO_THREADS,
                                            ThreadType.PLATFORM, 1,
                                            SyncType.NONE, BenchmarkConfig.CHUNK_SIZE);
            case "PLATFORM_PLATFORM" -> cfg(scenario, ThreadType.PLATFORM, ThreadType.PLATFORM, SyncType.NONE);
            case "VIRTUAL_VIRTUAL"   -> cfg(scenario, ThreadType.VIRTUAL,  ThreadType.VIRTUAL,  SyncType.NONE);
            case "PLATFORM_VIRTUAL"  -> cfg(scenario, ThreadType.PLATFORM, ThreadType.VIRTUAL,  SyncType.NONE);
            case "VIRTUAL_PLATFORM"  -> cfg(scenario, ThreadType.VIRTUAL,  ThreadType.PLATFORM, SyncType.NONE);
            case "MUTEX_VIRTUAL_PLATFORM"     -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.MUTEX);
            case "SEMAPHORE_VIRTUAL_PLATFORM" -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.SEMAPHORE);
            case "VOLATILE_VIRTUAL_PLATFORM"  -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.VOLATILE);
            case "ATOMIC_VIRTUAL_PLATFORM"    -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.ATOMIC);
            case "PRODUCER_CONSUMER"          -> cfg(scenario, ThreadType.VIRTUAL, ThreadType.PLATFORM, SyncType.NONE);
            default -> throw new IllegalArgumentException("Cenário JMeter inválido: " + scenario);
        };
    }

    /**
     * Helper para montar configs com as constantes de {@link BenchmarkConfig}.
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
