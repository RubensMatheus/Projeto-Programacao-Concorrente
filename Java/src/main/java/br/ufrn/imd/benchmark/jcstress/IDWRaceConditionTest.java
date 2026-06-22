package br.ufrn.imd.benchmark.jcstress;

import org.openjdk.jcstress.annotations.*;
import org.openjdk.jcstress.infra.results.LL_Result;

import java.util.concurrent.Semaphore;
import java.util.concurrent.atomic.LongAdder;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Testes JCStress baseados na acumulação paralela do algoritmo IDW.
 *
 * Contexto do algoritmo:
 * Em uma implementação paralela ingênua do IDW, múltiplas threads precisariam
 * acumular somas parciais em variáveis compartilhadas:
 *   numerator   += weight * value   (ex: 1/d² * temperatura_sensor)
 *   denominator += weight           (ex: 1/d²)
 *
 * Os cinco testes (NONE, MUTEX, SEMAPHORE, VOLATILE, ATOMIC) provam como cada
 * estratégia de sincronização se comporta nesse padrão de acumulação, espelhando
 * o que as subclasses de {@code IDWConcurrentBase} fazem em {@code contribute()}.
 *
 * Valores usados (escalados ×100 para usar long no JCStress):
 *   Thread A simula sensor com peso=0.5, valor=10 → contribui +500 no numerador, +50 no denominador
 *   Thread B simula sensor com peso=0.3, valor=20 → contribui +600 no numerador, +30 no denominador
 *   Resultado correto: numeradorX100=1100, denominadorX100=80
 *
 * Executar todos:       mvn jcstress:run
 * Executar um teste:    mvn jcstress:run -Djcstress.tests=IDWPartialSumRaceTest
 */
public class IDWRaceConditionTest {

    /**
     * NONE — Race condition real na acumulação IDW sem sincronização.
     *
     * Modela o que acontece quando duas threads somam parciais ao mesmo
     * numerador/denominador sem qualquer lock. A operação += não é atômica:
     * é uma sequência lê→soma→escreve que pode ser interrompida entre steps.
     *
     * Outcome ACCEPTABLE_INTERESTING indica que uma thread sobrescreveu o
     * resultado da outra — exatamente a race condition do cenário NONE.
     */
    @JCStressTest
    @Description("Race condition: acumulação paralela IDW sem sincronização (cenário NONE).")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE,             desc = "Correto: ambas as contribuições foram aplicadas sem race.")
    @Outcome(                  expect = Expect.ACCEPTABLE_INTERESTING, desc = "RACE CONDITION: ao menos uma contribuição foi perdida — leitura stale na operação +=.")
    @State
    public static class IDWPartialSumRaceTest {
        // Acumuladores compartilhados (sem sincronização — NONE)
        long numeratorX100   = 0L;
        long denominatorX100 = 0L;

        /** Simula sensor A contribuindo (500, 50) ao par (num, den). */
        @Actor
        public void threadA() {
            // Simula: numerator += weight_A * value_A = 0.5 * 10 = 5.0 → ×100 = 500
            numeratorX100   += 500L;
            // Simula: denominator += weight_A = 0.5 → ×100 = 50
            denominatorX100 += 50L;
        }

        /** Simula sensor B contribuindo (600, 30) ao par (num, den). */
        @Actor
        public void threadB() {
            // Simula: numerator += weight_B * value_B = 0.3 * 20 = 6.0 → ×100 = 600
            numeratorX100   += 600L;
            // Simula: denominator += weight_B = 0.3 → ×100 = 30
            denominatorX100 += 30L;
        }

        /**
         * Coleta o par observado após as duas threads terminarem.
         *
         * @param r resultado JCStress (r1 = numerador, r2 = denominador)
         */
        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numeratorX100;    // correto: 1100
            r.r2 = denominatorX100; // correto: 80
        }
    }


    /**
     * MUTEX — ReentrantLock (SyncType.MUTEX) elimina a race condition.
     *
     * Modela o {@code contribute()} de {@code IDWMutexImpl}:
     * o lock garante que apenas uma thread por vez modifica os acumuladores,
     * tornando a leitura+escrita atômica da perspectiva das outras threads.
     *
     * Somente o resultado correto "1100, 80" deve ser observável.
     * Qualquer outro resultado seria uma falha do mecanismo de lock.
     */
    @JCStressTest
    @Description("MUTEX: ReentrantLock garante acumulação IDW livre de race condition.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: lock garantiu atomicidade da acumulação.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com ReentrantLock correto — indicaria bug no lock.")
    @State
    public static class IDWMutexPartialSumTest {
        long numeratorX100   = 0L;
        long denominatorX100 = 0L;
        final ReentrantLock lock = new ReentrantLock();

        /** Simula sensor A contribuindo (500, 50) ao par (num, den). */
        @Actor
        public void threadA() {
            lock.lock();
            try {
                numeratorX100   += 500L;
                denominatorX100 += 50L;
            } finally {
                lock.unlock();
            }
        }

        /** Simula sensor B contribuindo (600, 30) ao par (num, den). */
        @Actor
        public void threadB() {
            lock.lock();
            try {
                numeratorX100   += 600L;
                denominatorX100 += 30L;
            } finally {
                lock.unlock();
            }
        }

        /**
         * Coleta o par observado após as duas threads terminarem.
         *
         * @param r resultado JCStress (r1 = numerador, r2 = denominador)
         */
        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numeratorX100;
            r.r2 = denominatorX100;
        }
    }


    /**
     * SEMAPHORE — Semaphore(1) atua como mutex e garante a acumulação correta.
     *
     * Modela o cenário SEMAPHORE de {@code IDWSemaphoreImpl} reduzido a 1 permit:
     * funciona como exclusão mútua, serializando as operações de acumulação.
     *
     * Somente "1100, 80" deve ser observável; qualquer outro resultado indicaria
     * falha do mecanismo de permits.
     */
    @JCStressTest
    @Description("SEMAPHORE: Semaphore(1) serializa a acumulação IDW e elimina a race.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: permit garantiu exclusão mútua na acumulação.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com Semaphore(1) correto — indicaria bug no permit.")
    @State
    public static class IDWSemaphorePartialSumTest {
        long numeratorX100   = 0L;
        long denominatorX100 = 0L;
        final Semaphore permit = new Semaphore(1);

        /** Simula sensor A contribuindo (500, 50) ao par (num, den). */
        @Actor
        public void threadA() {
            permit.acquireUninterruptibly();
            try {
                numeratorX100   += 500L;
                denominatorX100 += 50L;
            } finally {
                permit.release();
            }
        }

        /** Simula sensor B contribuindo (600, 30) ao par (num, den). */
        @Actor
        public void threadB() {
            permit.acquireUninterruptibly();
            try {
                numeratorX100   += 600L;
                denominatorX100 += 30L;
            } finally {
                permit.release();
            }
        }

        /**
         * Coleta o par observado após as duas threads terminarem.
         *
         * @param r resultado JCStress (r1 = numerador, r2 = denominador)
         */
        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numeratorX100;
            r.r2 = denominatorX100;
        }
    }


    /**
     * VOLATILE — apenas visibilidade, NÃO atomicidade.
     *
     * Modela o cenário VOLATILE: `volatile` garante que escritas sejam vistas
     * por outras threads imediatamente, mas a operação += continua sendo
     * lê→soma→escreve não atômica. A race condition PERSISTE: este teste
     * deve apresentar resultados ACCEPTABLE_INTERESTING, evidenciando a
     * limitação semântica do `volatile` para acumulação.
     *
     * Este resultado é parte da prova de que `volatile` NÃO substitui
     * mutex/atomic em padrões de read-modify-write.
     */
    @JCStressTest
    @Description("VOLATILE: visibilidade sem atomicidade — race persiste em += compartilhado.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE,             desc = "Visível: ambas as contribuições foram aplicadas (sem interleaving destrutivo neste run).")
    @Outcome(                  expect = Expect.ACCEPTABLE_INTERESTING, desc = "RACE CONDITION: volatile garante visibilidade mas NÃO atomicidade do +=.")
    @State
    public static class IDWVolatilePartialSumTest {
        volatile long numeratorX100   = 0L;
        volatile long denominatorX100 = 0L;

        /** Simula sensor A contribuindo (500, 50) ao par (num, den). */
        @Actor
        public void threadA() {
            numeratorX100   += 500L;
            denominatorX100 += 50L;
        }

        /** Simula sensor B contribuindo (600, 30) ao par (num, den). */
        @Actor
        public void threadB() {
            numeratorX100   += 600L;
            denominatorX100 += 30L;
        }

        /**
         * Coleta o par observado após as duas threads terminarem.
         *
         * @param r resultado JCStress (r1 = numerador, r2 = denominador)
         */
        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numeratorX100;
            r.r2 = denominatorX100;
        }
    }


    /**
     * ATOMIC — LongAdder (SyncType.ATOMIC) garante acumulação correta sem lock.
     *
     * Modela o uso de DoubleAdder em {@code IDWAtomicImpl} (aqui via LongAdder
     * para casar com {@link LL_Result}). LongAdder/DoubleAdder usam células por
     * thread (striping interno via CAS), eliminando a
     * contenção de lock e garantindo resultado correto mesmo sob alta concorrência.
     *
     * Vantagem sobre MUTEX: sem bloqueio de threads — melhor throughput quando muitas
     * threads acumulam simultaneamente (cenário típico do IDW com muitos sensores).
     */
    @JCStressTest
    @Description("ATOMIC: LongAdder garante acumulação IDW correta sem lock explícito.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: LongAdder garantiu atomicidade sem lock.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com LongAdder — indicaria bug na JVM.")
    @State
    public static class IDWLongAdderPartialSumTest {
        final LongAdder numeratorAdder   = new LongAdder();
        final LongAdder denominatorAdder = new LongAdder();

        /** Simula sensor A contribuindo (500, 50) ao par (num, den). */
        @Actor
        public void threadA() {
            numeratorAdder.add(500L);
            denominatorAdder.add(50L);
        }

        /** Simula sensor B contribuindo (600, 30) ao par (num, den). */
        @Actor
        public void threadB() {
            numeratorAdder.add(600L);
            denominatorAdder.add(30L);
        }

        /**
         * Coleta o par observado após as duas threads terminarem.
         *
         * @param r resultado JCStress (r1 = numerador, r2 = denominador)
         */
        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numeratorAdder.longValue();
            r.r2 = denominatorAdder.longValue();
        }
    }
}
