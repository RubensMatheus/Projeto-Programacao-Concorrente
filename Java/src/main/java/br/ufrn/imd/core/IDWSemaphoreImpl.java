package br.ufrn.imd.core;

import br.ufrn.imd.config.BenchmarkConfig;

import java.util.concurrent.Semaphore;

/**
 * Cenário SEMAPHORE — capacity control + lock interno.
 *
 * O semáforo limita quantas threads podem estar na seção crítica
 * simultaneamente (permits < threads). Diferente do MUTEX puro (sempre 1),
 * permite tunar o paralelismo permitido. O lock interno preserva
 * atomicidade do par (num, den).
 *
 * Com permits = N, comporta-se como "sem controle" (mas ainda correto via
 * lock interno). Com permits = 1, comporta-se exatamente como MUTEX.
 */
public class IDWSemaphoreImpl extends IDWConcurrentBase {

    private final Semaphore permits;
    private final Object aggregationLock = new Object();
    private double num;
    private double den;

    /** Cria com permits padrão = metade de {@code COMPUTE_THREADS} (mínimo 1). */
    public IDWSemaphoreImpl() {
        this(Math.max(1, BenchmarkConfig.COMPUTE_THREADS / 2));
    }

    /**
     * @param permits quantidade máxima de threads simultâneas na seção crítica
     */
    public IDWSemaphoreImpl(int permits) {
        this.permits = new Semaphore(permits);
    }

    /** Zera os acumuladores; semáforo e lock não precisam ser reinicializados. */
    @Override
    protected void reset() {
        num = 0.0;
        den = 0.0;
    }

    /**
     * Adquire um permit, agrega sob {@code synchronized} e libera o permit.
     *
     * @param weightedValue parcial {@code peso × valor}
     * @param weight        peso {@code 1/d²}
     */
    @Override
    protected void contribute(double weightedValue, double weight) {
        permits.acquireUninterruptibly();
        try {
            synchronized (aggregationLock) {
                num += weightedValue;
                den += weight;
            }
        } finally {
            permits.release();
        }
    }

    /** @return {@code num/den}, equivalente ao baseline serial. */
    @Override
    protected double finalResult() {
        return num / den;
    }
}
