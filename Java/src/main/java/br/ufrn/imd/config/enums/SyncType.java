package br.ufrn.imd.config.enums;

/**
 * Estratégia de sincronização aplicada aos acumuladores {@code num}/{@code den}
 * durante a agregação concorrente do IDW. Cada valor seleciona uma implementação
 * diferente de {@code IDWConcurrentBase}.
 */
public enum SyncType {
    /** Sem sincronização — race condition intencional para fins de demonstração. */
    NONE,
    /** {@code ReentrantLock} cobrindo o read-modify-write dos acumuladores. */
    MUTEX,
    /** {@code Semaphore} com permits + lock interno para preservar atomicidade. */
    SEMAPHORE,
    /** {@code volatile} nos acumuladores — garante visibilidade, NÃO atomicidade. */
    VOLATILE,
    /** {@code DoubleAdder} — striping interno via CAS, sem lock explícito. */
    ATOMIC
}
