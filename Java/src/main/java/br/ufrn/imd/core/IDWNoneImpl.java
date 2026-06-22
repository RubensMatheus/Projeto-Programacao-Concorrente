package br.ufrn.imd.core;

/**
 * Cenário NONE — sem qualquer sincronização nos acumuladores compartilhados.
 *
 * As operações `num += w*z` e `den += w` são read-modify-write não atômicas.
 * Sob múltiplas threads, lost updates fazem o IDW final divergir do correto.
 * É exatamente isso que queremos demonstrar — a falha aparece no resultado.
 */
public class IDWNoneImpl extends IDWConcurrentBase {

    private double num;
    private double den;

    /** Zera os acumuladores antes de cada execução. */
    @Override
    protected void reset() {
        num = 0.0;
        den = 0.0;
    }

    /**
     * Soma sem qualquer proteção — RMW não atômico, race intencional.
     *
     * @param weightedValue parcial {@code peso × valor}
     * @param weight        peso {@code 1/d²}
     */
    @Override
    protected void contribute(double weightedValue, double weight) {
        num += weightedValue;
        den += weight;
    }

    /** @return {@code num/den} (tende a divergir do baseline serial). */
    @Override
    protected double finalResult() {
        return num / den;
    }
}
