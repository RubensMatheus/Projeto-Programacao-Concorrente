package br.ufrn.imd.config;

import br.ufrn.imd.config.enums.SyncType;
import br.ufrn.imd.config.enums.ThreadType;

/**
 * Configuração imutável de um cenário de execução IDW. Viaja por todo o
 * pipeline (leitura do CSV, particionamento, fase de cálculo).
 *
 * @param name              rótulo legível do cenário (usado em logs/relatórios)
 * @param ioThreadType      tipo de thread usado pelo {@code CsvDatasetReader}
 * @param ioThreads         quantidade de threads para parsear o CSV em paralelo
 * @param computeThreadType tipo de thread usado pelo executor da fase de cálculo
 * @param computeThreads    quantidade de threads/workers da fase de cálculo
 * @param syncType          estratégia de sincronização dos acumuladores
 * @param chunkSize         tamanho do chunk de particionamento (sensores ou ranges PC)
 */
public record ExecutionConfig(
        String name,

        ThreadType ioThreadType,
        int ioThreads,

        ThreadType computeThreadType,
        int computeThreads,

        SyncType syncType,

        int chunkSize
) { }