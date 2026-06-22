package br.ufrn.imd.core;

import java.util.concurrent.locks.ReentrantLock;

/**
 * Cenário MUTEX — ReentrantLock cobrindo o RMW dos dois acumuladores.
 *
 * O par (num, den) é atualizado dentro da mesma seção crítica, garantindo
 * que a soma de todas as parcelas seja exata. IDW final igual ao serial
 * até epsilon de ponto flutuante.
 *
 * Trade-off: o lock serializa quase todas as contribuições — todas as
 * threads competem por um único monitor. Throughput tende a degradar com
 * mais threads. Bom contraste contra o cenário ATOMIC.
 */
public class IDWMutexImpl extends IDWConcurrentBase {

    private final ReentrantLock lock = new ReentrantLock();
    private double num;
    private double den;

    /** Zera os acumuladores; o lock não precisa ser reinicializado. */
    @Override
    protected void reset() {
        num = 0.0;
        den = 0.0;
    }

    /**
     * Acumula sob {@code lock.lock()} — RMW atômico sobre {@code (num, den)}.
     *
     * @param weightedValue parcial {@code peso × valor}
     * @param weight        peso {@code 1/d²}
     */
    @Override
    protected void contribute(double weightedValue, double weight) {
        lock.lock();
        try {
            num += weightedValue;
            den += weight;
        } finally {
            lock.unlock();
        }
    }

    /** @return {@code num/den} (igual ao serial até epsilon de FP). */
    @Override
    protected double finalResult() {
        return num / den;
    }
}
