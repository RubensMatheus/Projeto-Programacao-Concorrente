package br.ufrn.imd;

import br.ufrn.imd.config.BenchmarkConfig;
import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;
import br.ufrn.imd.core.IDWSerialImpl;

import java.nio.file.Path;

public class Main {

    // Se quiser rodar lembre de gerar o dataset
    public static void main(String[] args) throws Exception {
        Path datasetPath = Path.of("../datasets/sensores.csv");

        ExecutionConfig config = new ExecutionConfig(
                "SERIAL",
                ThreadType.PLATFORM,
                BenchmarkConfig.IO_THREADS,
                ThreadType.PLATFORM,
                1,
                SyncType.NONE,
                BenchmarkConfig.CHUNK_SIZE
        );

        long t0 = System.nanoTime();
        double result = new IDWSerialImpl().executeFullProcess(
                datasetPath,
                BenchmarkConfig.QUERY_LONGITUDE,
                BenchmarkConfig.QUERY_LATITUDE,
                config
        );
        double elapsed = (System.nanoTime() - t0) / 1e9;

        System.out.printf("idw_serial_java: %.15f%n", result);
        System.out.printf("elapsed_seconds: %.3f%n", elapsed);
    }
}
