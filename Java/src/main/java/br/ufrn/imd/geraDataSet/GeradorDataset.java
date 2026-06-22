package br.ufrn.imd.geraDataSet;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

/**
 * Gera o dataset de sensores simulados em formato CSV com aproximadamente 1 GB.
 * Cada linha representa um sensor com latitude (-90 a 90), longitude (-180 a 180)
 * e temperatura (10.0 a 40.0 °C). Execute uma vez antes dos benchmarks.
 */
public class GeradorDataset {

    /**
     * Gera o arquivo {@code ../datasets/sensores.csv} com ~1 GB de dados aleatórios.
     *
     * @param args ignorados
     */
    public static void main(String[] args) {
        String nomeArquivo = "../datasets/sensores.csv";
        long tamanhoDesejadoBytes = 1024L * 1024L * 1024L; // 1 GB
        Random random = new Random();

        System.out.println("Gerando dataset de 1 GB... Isso pode levar alguns minutos.");

        File diretorioPai = new File("../datasets");
        if (!diretorioPai.exists()) {
            System.out.println("Pasta 'datasets' não encontrada. Criando diretório automaticamente...");
            diretorioPai.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nomeArquivo))) {
            long linhasGeradas = 0;
            long bytesEscritos = 0;

            while (bytesEscritos < tamanhoDesejadoBytes) {
                // Coordenadas geoespaciais válidas para o algoritmo IDW/Haversine
                double latitude  = -90.0  + random.nextDouble() * 180.0; // -90  a  90
                double longitude = -180.0 + random.nextDouble() * 360.0; // -180 a 180
                double temp      = 10.0   + random.nextDouble() * 30.0;  // 10.0 a 40.0 °C

                String linha = String.format(java.util.Locale.US, "%.6f,%.6f,%.2f\n",
                        latitude, longitude, temp);
                writer.write(linha);

                bytesEscritos += linha.length(); // 1 char = 1 byte (ASCII)
                linhasGeradas++;

                if (linhasGeradas % 5_000_000 == 0) {
                    System.out.printf("Geradas %,d linhas (%.1f MB)...%n",
                            linhasGeradas, bytesEscritos / (1024.0 * 1024.0));
                }
            }

            System.out.printf("Dataset gerado com sucesso!%n  Linhas: %,d%n  Tamanho: %.2f MB%n",
                    linhasGeradas, bytesEscritos / (1024.0 * 1024.0));

        } catch (IOException e) {
            System.err.println("Erro ao gerar dataset: " + e.getMessage());
        }
    }
}
