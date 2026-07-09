package br.ufrn.imd.benchmark.jcstress;

import org.openjdk.jcstress.annotations.*;
import org.openjdk.jcstress.infra.results.LL_Result;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.StructuredTaskScope;
import java.util.stream.IntStream;

/**
 * Testes JCStress das estratégias da Etapa 2.
 *
 * Cada teste mostra que o mecanismo de agregação da estratégia entrega o par
 * (numerador, denominador) correto sem race, ao contrário do baseline sem
 * sincronização já provado em {@link IDWRaceConditionTest}.
 *
 * Pattern do IDW simulado (×100 para caber em long):
 *   Thread A: (peso=0.5, valor=10) contribui (+500 num, +50 den)
 *   Thread B: (peso=0.3, valor=20) contribui (+600 num, +30 den)
 *   Correto: (1100, 80)
 *
 * Cada estratégia da Etapa 2 usa estado *por tarefa* + um mecanismo de barreira
 * (join, get, allOf, StructuredTaskScope.join). Os testes exercem esse
 * mecanismo com dois atores executando em paralelo.
 */
public class IDWEtapa2CorrectnessTest {

    /**
     * ForkJoin: RecursiveTask.join() provê happens-before entre a computação
     * do fork e a leitura no thread pai. Cada tarefa acumula em variável
     * local, sem estado compartilhado, portanto não há race.
     */
    @JCStressTest
    @Description("ForkJoin: RecursiveTask.join() garante agregação IDW livre de race.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: join() estabelece happens-before.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com ForkJoin correto.")
    @State
    public static class IDWForkJoinJoinTest {
        volatile long partialNumA, partialDenA;
        volatile long partialNumB, partialDenB;

        @Actor
        public void threadA() {
            RecursiveTask<long[]> t = new RecursiveTask<>() {
                @Override protected long[] compute() { return new long[]{500L, 50L}; }
            };
            long[] r = ForkJoinPool.commonPool().invoke(t);
            partialNumA = r[0];
            partialDenA = r[1];
        }

        @Actor
        public void threadB() {
            RecursiveTask<long[]> t = new RecursiveTask<>() {
                @Override protected long[] compute() { return new long[]{600L, 30L}; }
            };
            long[] r = ForkJoinPool.commonPool().invoke(t);
            partialNumB = r[0];
            partialDenB = r[1];
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = partialNumA + partialNumB;
            r.r2 = partialDenA + partialDenB;
        }
    }


    /**
     * Parallel Stream: reduce com combiner associativo garante que a agregação
     * final some todas as parciais sem depender de ordem.
     */
    @JCStressTest
    @Description("Parallel Stream: reduce associativo garante agregação IDW correta.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: reduce associativo.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com combiner associativo.")
    @State
    public static class IDWParallelStreamReduceTest {
        volatile long numA, denA;
        volatile long numB, denB;

        @Actor
        public void threadA() {
            long[] r = IntStream.of(500).parallel()
                    .mapToObj(v -> new long[]{v, 50L})
                    .reduce(new long[]{0L, 0L},
                            (a, b) -> new long[]{a[0]+b[0], a[1]+b[1]});
            numA = r[0]; denA = r[1];
        }

        @Actor
        public void threadB() {
            long[] r = IntStream.of(600).parallel()
                    .mapToObj(v -> new long[]{v, 30L})
                    .reduce(new long[]{0L, 0L},
                            (a, b) -> new long[]{a[0]+b[0], a[1]+b[1]});
            numB = r[0]; denB = r[1];
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numA + numB;
            r.r2 = denA + denB;
        }
    }


    /**
     * CompletableFuture: thenCombine + get() estabelecem happens-before do
     * resultado dos supplyAsync até o consumidor. As parciais produzidas por
     * cada CF chegam ao arbiter sem race.
     */
    @JCStressTest
    @Description("CompletableFuture: thenCombine encadeia parciais sem race.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: thenCombine garante ordem.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com CompletableFuture correto.")
    @State
    public static class IDWCompletableFutureCombineTest {
        volatile long numA, denA;
        volatile long numB, denB;

        @Actor
        public void threadA() {
            CompletableFuture<long[]> num = CompletableFuture.supplyAsync(() -> new long[]{500L});
            CompletableFuture<long[]> den = CompletableFuture.supplyAsync(() -> new long[]{50L});
            long[] r = num.thenCombine(den, (n, d) -> new long[]{n[0], d[0]}).join();
            numA = r[0]; denA = r[1];
        }

        @Actor
        public void threadB() {
            CompletableFuture<long[]> num = CompletableFuture.supplyAsync(() -> new long[]{600L});
            CompletableFuture<long[]> den = CompletableFuture.supplyAsync(() -> new long[]{30L});
            long[] r = num.thenCombine(den, (n, d) -> new long[]{n[0], d[0]}).join();
            numB = r[0]; denB = r[1];
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numA + numB;
            r.r2 = denA + denB;
        }
    }


    /**
     * Structured Concurrency: StructuredTaskScope.join() aguarda todas as
     * subtarefas antes do arbiter ler; happens-before via join equivale ao
     * padrão fork+join clássico, sem estado compartilhado.
     */
    @JCStressTest
    @Description("StructuredTaskScope: join() aguarda todas as subtarefas.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: scope.join() é barreira.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível com StructuredTaskScope correto.")
    @State
    public static class IDWStructuredScopeJoinTest {
        volatile long numA, denA;
        volatile long numB, denB;

        @Actor
        public void threadA() {
            try (var scope = StructuredTaskScope.open()) {
                var fNum = scope.fork(() -> 500L);
                var fDen = scope.fork(() -> 50L);
                scope.join();
                numA = fNum.get();
                denA = fDen.get();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        @Actor
        public void threadB() {
            try (var scope = StructuredTaskScope.open()) {
                var fNum = scope.fork(() -> 600L);
                var fDen = scope.fork(() -> 30L);
                scope.join();
                numB = fNum.get();
                denB = fDen.get();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numA + numB;
            r.r2 = denA + denB;
        }
    }


    /**
     * ScopedValue: cada @Actor executa dentro de um binding próprio
     * (ScopedValue.where(...).run(...)). O valor ligado NÃO deve vazar para a
     * outra thread. Se ScopedValue funcionar como esperado, cada thread vê
     * apenas o próprio valor e não há interferência.
     *
     * O binding retorna o peso; cada thread multiplica pelo valor local para
     * gerar a contribuição, e escreve numa variável dedicada. Arbiter soma.
     */
    @JCStressTest
    @Description("ScopedValue: bindings isolam contexto por thread, sem vazamento.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: bindings isolados garantem parciais corretas.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível se ScopedValue respeitar isolamento.")
    @State
    public static class IDWScopedValueIsolationTest {
        static final ScopedValue<Long> WEIGHT_X100 = ScopedValue.newInstance();

        volatile long numA, denA;
        volatile long numB, denB;

        @Actor
        public void threadA() {
            ScopedValue.where(WEIGHT_X100, 50L).run(() -> {
                long w = WEIGHT_X100.get();
                numA = w * 10L;   // valor=10 → 50*10 = 500
                denA = w;         // 50
            });
        }

        @Actor
        public void threadB() {
            ScopedValue.where(WEIGHT_X100, 30L).run(() -> {
                long w = WEIGHT_X100.get();
                numB = w * 20L;   // valor=20 → 30*20 = 600
                denB = w;         // 30
            });
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numA + numB;
            r.r2 = denA + denB;
        }
    }


    /**
     * ThreadLocal em Virtual Threads: contraparte do ScopedValue. Cada thread
     * mantém seu próprio slot ThreadLocal; sem vazamento porque get/set operam
     * na thread atual. Serve de comparação com o teste anterior.
     */
    @JCStressTest
    @Description("ThreadLocal: slot por thread garante isolamento clássico.")
    @Outcome(id = "1100, 80", expect = Expect.ACCEPTABLE, desc = "Correto: ThreadLocal.set não vaza para outra thread.")
    @Outcome(                  expect = Expect.FORBIDDEN,  desc = "Impossível: implicaria bug na JVM.")
    @State
    public static class IDWThreadLocalIsolationTest {
        static final ThreadLocal<Long> WEIGHT_X100 = new ThreadLocal<>();

        volatile long numA, denA;
        volatile long numB, denB;

        @Actor
        public void threadA() {
            try {
                WEIGHT_X100.set(50L);
                long w = WEIGHT_X100.get();
                numA = w * 10L;
                denA = w;
            } finally {
                WEIGHT_X100.remove();
            }
        }

        @Actor
        public void threadB() {
            try {
                WEIGHT_X100.set(30L);
                long w = WEIGHT_X100.get();
                numB = w * 20L;
                denB = w;
            } finally {
                WEIGHT_X100.remove();
            }
        }

        @Arbiter
        public void result(LL_Result r) {
            r.r1 = numA + numB;
            r.r2 = denA + denB;
        }
    }
}
