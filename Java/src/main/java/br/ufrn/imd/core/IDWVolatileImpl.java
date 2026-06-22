package br.ufrn.imd.core;

/**
 * Cenário VOLATILE — demonstra que volatile NÃO resolve RMW.
 *
 * Marca num e den como volatile (visibilidade imediata) MAS as operações
 * += continuam sendo (read, add, write) não atômicos. Lost updates
 * acontecem e o IDW final tende a sair errado — esse é o ponto pedagógico:
 *   "volatile garante visibilidade, não atomicidade."
 *
 * A flag `computationDone` é o uso CORRETO de volatile: publica o término
 * da computação para outras threads (caso canônico do Goetz, JCiP §3.1).
 */
public class IDWVolatileImpl extends IDWConcurrentBase {

    private volatile double num;
    private volatile double den;
    private volatile boolean computationDone = false;

    /** Zera acumuladores e flag de término. */
    @Override
    protected void reset() {
        num = 0.0;
        den = 0.0;
        computationDone = false;
    }

    /**
     * Soma sob {@code volatile} — visível, mas NÃO atômica (lost update persiste).
     *
     * @param weightedValue parcial {@code peso × valor}
     * @param weight        peso {@code 1/d²}
     */
    @Override
    protected void contribute(double weightedValue, double weight) {
        // volatile resolve VISIBILIDADE, não ATOMICIDADE de RMW.
        // Estas duas linhas continuam suscetíveis a lost update.
        num += weightedValue;
        den += weight;
    }

    /**
     * Publica o término via {@code computationDone} (uso correto de volatile).
     *
     * @return {@code num/den} (tende a divergir do serial pela race do RMW)
     */
    @Override
    protected double finalResult() {
        computationDone = true;
        return num / den;
    }
}
