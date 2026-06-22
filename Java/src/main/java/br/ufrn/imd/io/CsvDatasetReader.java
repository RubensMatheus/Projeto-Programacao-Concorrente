package br.ufrn.imd.io;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.model.DataSet;
import br.ufrn.imd.utils.ExecutorFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;

/**
 * Leitor paralelo de CSV de sensores. Faz duas passadas:
 * (1) conta linhas para pré-alocar arrays {@code double[]}; (2) distribui
 * intervalos de linha entre {@code config.ioThreads()} workers que parseiam
 * em paralelo, sem alocação intermediária.
 */
public class CsvDatasetReader {

    /**
     * Lê o CSV completo em memória.
     *
     * @param path   caminho do arquivo CSV (3 colunas: lat,lon,valor)
     * @param config define {@code ioThreadType} e {@code ioThreads}
     * @return {@link DataSet} com os arrays paralelos populados
     * @throws Exception se o arquivo não existir ou parsing falhar
     */
    public DataSet read(Path path, ExecutionConfig config) throws Exception {
        // Primeira passagem: conta linhas para pré-alocar arrays primitivos (sem boxing)
        int lineCount = countDataLines(path);

        double[] latitudes  = new double[lineCount];
        double[] longitudes = new double[lineCount];
        double[] values     = new double[lineCount];

        // Divide os índices de linha entre as threads de IO
        int threadCount = config.ioThreads();
        int chunkSize   = (int) Math.ceil((double) lineCount / threadCount);

        try (ExecutorService executor = ExecutorFactory.create(config.ioThreadType(), threadCount)) {
            List<Future<?>> futures = new ArrayList<>();

            for (int t = 0; t < threadCount; t++) {
                final int lineStart = t * chunkSize;
                final int lineEnd   = Math.min(lineStart + chunkSize, lineCount);
                if (lineStart >= lineCount) break;

                futures.add(executor.submit(() ->
                        parseRange(path, latitudes, longitudes, values, lineStart, lineEnd)));
            }

            for (Future<?> f : futures) f.get();
        }

        return new DataSet(latitudes, longitudes, values);
    }

    /**
     * Conta linhas não-vazias do arquivo (passada única, sequencial).
     *
     * @param path arquivo
     * @return total de linhas com conteúdo
     * @throws Exception se a leitura falhar
     */
    private int countDataLines(Path path) throws Exception {
        int count = 0;
        try (BufferedReader br = Files.newBufferedReader(path)) {
            String line;
            while ((line = br.readLine()) != null) {
                if (!line.isBlank()) count++;
            }
        }
        return count;
    }

    /**
     * Parseia um intervalo {@code [lineStart, lineEnd)} de linhas do CSV
     * diretamente para os arrays destino. Cada thread reabre o arquivo e
     * pula {@code lineStart} linhas para chegar ao seu range.
     *
     * @param path       caminho do arquivo
     * @param latitudes  array destino de latitudes
     * @param longitudes array destino de longitudes
     * @param values     array destino de valores
     * @param lineStart  primeira linha do intervalo (inclusivo)
     * @param lineEnd    última linha do intervalo (exclusivo)
     */
    private void parseRange(
            Path path,
            double[] latitudes, double[] longitudes, double[] values,
            int lineStart, int lineEnd
    ) {
        try (BufferedReader br = Files.newBufferedReader(path)) {
            for (int skip = 0; skip < lineStart; skip++) br.readLine();

            int idx = lineStart;
            String line;
            while (idx < lineEnd && (line = br.readLine()) != null) {
                if (line.isBlank()) continue;
                int c1 = line.indexOf(',');
                int c2 = line.indexOf(',', c1 + 1);
                latitudes[idx]  = Double.parseDouble(line.substring(0, c1));
                longitudes[idx] = Double.parseDouble(line.substring(c1 + 1, c2));
                values[idx]     = Double.parseDouble(line.substring(c2 + 1));
                idx++;
            }
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
