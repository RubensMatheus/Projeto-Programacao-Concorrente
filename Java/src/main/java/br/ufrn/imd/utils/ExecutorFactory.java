package br.ufrn.imd.utils;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import br.ufrn.imd.config.enums.ThreadType;

/**
 * Fábrica que cria ExecutorService de acordo com o ThreadType configurado.
 * PLATFORM produz um pool fixo de OS threads; VIRTUAL produz um executor
 * com uma Virtual Thread por tarefa (Project Loom — sem pool fixo).
 */
public class ExecutorFactory {

    /**
     * Cria um {@link ExecutorService} compatível com o tipo de thread escolhido.
     *
     * @param threadType      {@code PLATFORM} → pool fixo de OS threads;
     *                        {@code VIRTUAL} → executor com 1 virtual thread por tarefa
     * @param numberOfThreads tamanho do pool (ignorado para VIRTUAL, que é ilimitado)
     * @return executor pronto para uso (deve ser fechado pelo chamador via try-with-resources)
     */
    public static ExecutorService create(ThreadType threadType, int numberOfThreads) {
        return switch (threadType) {
            case PLATFORM -> Executors.newFixedThreadPool(numberOfThreads);
            case VIRTUAL -> Executors.newVirtualThreadPerTaskExecutor();
        };
    }
}
