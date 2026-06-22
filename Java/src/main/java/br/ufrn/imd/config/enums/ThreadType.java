package br.ufrn.imd.config.enums;

/**
 * Tipo de thread utilizado nas fases de IO e cálculo do IDW.
 * Determina qual estratégia o {@code ExecutorFactory} usa para criar o pool.
 */
public enum ThreadType {
    /** Threads do sistema operacional (mapeamento 1:1 com OS thread). */
    PLATFORM,
    /** Virtual Threads do Project Loom — leves, escalonadas pela JVM sobre carriers. */
    VIRTUAL
}
