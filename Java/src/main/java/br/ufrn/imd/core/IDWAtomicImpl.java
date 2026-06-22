package br.ufrn.imd.core;

import java.util.concurrent.atomic.DoubleAdder;

/**
 * Cenário ATOMIC — DoubleAdder para num/den.
 *
 * DoubleAdder usa células por thread (striping interno via CAS), eliminando
 * a contenção de lock e permitindo que todas as threads contribuam em
 * paralelo. Sob alta contenção (caso do IDW com 1 ponto), escala melhor que
 * MUTEX porque não há serialização.
 *
 * Resultado: correto até epsilon de FP, throughput superior ao MUTEX.
 */
public class IDWAtomicImpl extends IDWConcurrentBase {

    private final DoubleAdder num = new DoubleAdder();
    private final DoubleAdder den = new DoubleAdder();

    /** Zera as células internas dos dois {@link DoubleAdder}. */
    @Override
    protected void reset() {
        num.reset();
        den.reset();
    }

    /**
     * Acumula via {@link DoubleAdder#add(double)} (CAS sobre célula por thread).
     *
     * @param weightedValue parcial {@code peso × valor}
     * @param weight        peso {@code 1/d²}
     */
    @Override
    protected void contribute(double weightedValue, double weight) {
        num.add(weightedValue);
        den.add(weight);
    }

    /** @return {@code num.sum() / den.sum()} — correto e escalável. */
    @Override
    protected double finalResult() {
        return num.sum() / den.sum();
    }
}
