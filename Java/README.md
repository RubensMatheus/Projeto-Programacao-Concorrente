# Projeto IDW Concorrente, Implementação Java

Implementação em **Java 26** do algoritmo de Interpolação por Distância Inversa Ponderada (IDW). Cobre duas etapas:

- **Etapa 1** (cenários 0 a 9): combinações de tipo de thread (Platform/Virtual) e primitivas de sincronização (`NONE`, `MUTEX`, `SEMAPHORE`, `VOLATILE`, `ATOMIC`, Producer-Consumer via `BlockingQueue`) sobre `ExecutorService`.
- **Etapa 2** (cenários 10 a 19): estratégias adicionais de concorrência: `ForkJoinPool` + `RecursiveTask`, `IntStream.parallel()`, `CompletableFuture`, `StructuredTaskScope` (JEP 505), `ScopedValue` vs `ThreadLocal` (JEP 506) e quatro abordagens em Apache Spark (RDD/CSV, DataFrame/SQL, Dataset/Parquet, UDF Haversine + `groupBy`).

## 1. Pré-requisitos

| Ferramenta | Versão | Instalação no macOS |
|---|---|---|
| **JDK** | 26 (ou superior) | `brew install openjdk@26` |
| **Maven** | 3.9+ | `brew install maven` |
| **Apache JMeter** | 5.6.3 | `brew install jmeter` (necessário só para macrobenchmark) |
| **JDK Mission Control** | 9+ | `brew install --cask jdk-mission-control` (opcional, para visualizar JFR) |
| **Apache Spark** | 3.5+ | não é necessário instalar separadamente, as dependências vêm via Maven (`spark-core`, `spark-sql`) |

Confirme as versões:

```bash
java -version    # deve mostrar 26
mvn -v           # deve mostrar 3.9+ apontando para o JDK 26
```

## 2. Gerar o Dataset (obrigatório antes de qualquer execução)

O dataset `datasets/sensores.csv` (~1 GB) **não está incluído na entrega** e precisa ser gerado uma única vez. A partir da pasta `Java/`:

```bash
mvn clean install
mvn exec:java -Dexec.mainClass="br.ufrn.imd.geraDataSet.GeradorDataset"
```

O arquivo é criado em `../datasets/sensores.csv` (relativo a `Java/`) e demora alguns minutos. Esse mesmo arquivo é compartilhado com o projeto Ruby.

## 3. Rodar o Pipeline Manualmente

Execução simples do algoritmo (útil para verificar que tudo está funcionando):

```bash
mvn exec:java -Dexec.mainClass="br.ufrn.imd.Main"
```

Imprime o valor IDW interpolado para o ponto de consulta hardcoded em `BenchmarkConfig` (próximo a Natal/RN).

## 4. Microbenchmark (JMH)

Mede o tempo médio do pipeline completo (IO + cálculo) para cada cenário, com fase de aquecimento explícita e múltiplos *forks* da JVM. Cada estratégia da Etapa 2 tem um arquivo de benchmark próprio, para permitir rodar isoladamente sem re-executar a Etapa 1 inteira.

```bash
# Compilar (gera target/benchmarks.jar via maven-shade-plugin)
mvn clean install

# Etapa 1: 10 cenários (Serial + Executor + sincronizações)
java -jar target/benchmarks.jar IDWFullProcessBenchmark

# Etapa 2: benchmarks isolados
java -jar target/benchmarks.jar IDWForkJoinBenchmark
java -jar target/benchmarks.jar IDWParallelStreamBenchmark
java -jar target/benchmarks.jar IDWCompletableFutureBenchmark
java -jar target/benchmarks.jar IDWStructuredConcurrencyBenchmark
java -jar target/benchmarks.jar IDWScopedContextBenchmark

# Salvar resultados em CSV/JSON
java -jar target/benchmarks.jar IDWFullProcessBenchmark -rf csv  -rff resultados-jmh.csv
java -jar target/benchmarks.jar IDWFullProcessBenchmark -rf json -rff resultados-jmh.json

# Rodar apenas um cenário específico da Etapa 1
java -jar target/benchmarks.jar IDWFullProcessBenchmark -p scenario=SERIAL
```

> A bateria completa da Etapa 1 demora cerca de 40 minutos. Os resultados de referência estão em `benchmark-results/jmh/` (Etapa 1) e `benchmark-results/etapa2/` (Etapa 2).

## 5. Macrobenchmark (JMeter) com os Três GCs

Mede o comportamento sob carga (5 threads × 10 iterações) repetido para cada coletor de lixo (G1, Parallel, ZGC). O plano de teste é o arquivo `plano.jmx`.

```bash
# Garantir que o JAR sombreado existe (criado por mvn clean install)
ls target/Java-1.0-SNAPSHOT.jar
```

Execução individual por GC (em modo CLI, sem GUI):

```bash
# G1 GC (padrão)
JVM_ARGS="-XX:+UseG1GC -XX:StartFlightRecording=duration=300s,filename=g1.jfr" \
  jmeter -n -t plano.jmx -Jscenario=SERIAL -l resultados-g1.jtl -e -o relatorio-g1

# Parallel GC
JVM_ARGS="-XX:+UseParallelGC -XX:StartFlightRecording=duration=300s,filename=parallel.jfr" \
  jmeter -n -t plano.jmx -Jscenario=SERIAL -l resultados-parallel.jtl -e -o relatorio-parallel

# Generational ZGC
JVM_ARGS="-XX:+UseZGC -XX:+ZGenerational -XX:StartFlightRecording=duration=300s,filename=zgc.jfr" \
  jmeter -n -t plano.jmx -Jscenario=SERIAL -l resultados-zgc.jtl -e -o relatorio-zgc
```

Para alternar entre os 10 cenários, basta trocar `-Jscenario=...` por uma das chaves:
`SERIAL`, `PLATFORM_PLATFORM`, `VIRTUAL_VIRTUAL`, `PLATFORM_VIRTUAL`, `VIRTUAL_PLATFORM`, `MUTEX_VIRTUAL_PLATFORM`, `SEMAPHORE_VIRTUAL_PLATFORM`, `VOLATILE_VIRTUAL_PLATFORM`, `ATOMIC_VIRTUAL_PLATFORM`, `PRODUCER_CONSUMER`.

Visualize os relatórios HTML abrindo `relatorio-g1/index.html` (idem para os outros) no navegador.

> Os resultados de referência (50 amostras × 10 cenários × 3 GCs) estão em `benchmark-results/jmeter/`, com um subdiretório por combinação.

## 6. Testes de Concorrência (JCStress)

Prova formalmente as race conditions dos cenários NONE e VOLATILE (Etapa 1) e a corretude dos cenários MUTEX, SEMAPHORE, ATOMIC (Etapa 1) e das novas estratégias da Etapa 2 (`IDWEtapa2CorrectnessTest`).

O `pom.xml` gera um uber-jar via `maven-shade-plugin` com o classifier `jcstress` (`Main-Class = org.openjdk.jcstress.Main`):

```bash
mvn clean install

# Todos os testes
java -jar target/Java-1.0-SNAPSHOT-jcstress.jar

# Apenas um teste específico
java -jar target/Java-1.0-SNAPSHOT-jcstress.jar -t IDWRaceConditionTest
java -jar target/Java-1.0-SNAPSHOT-jcstress.jar -t IDWEtapa2CorrectnessTest
```

O relatório HTML é salvo em `results/`. Abra o `index.html` no navegador para ver, por teste, quais *interleavings* foram observados e a classificação de cada um (`ACCEPTABLE`, `ACCEPTABLE_INTERESTING`, `FORBIDDEN`).

## 7. Profiling com JFR/JMC

Os comandos do macrobenchmark acima já incluem a flag `-XX:StartFlightRecording=...`, que gera arquivos `.jfr` junto com cada execução. Para visualizar:

```bash
# Abre o JMC com o arquivo
jmc -open g1.jfr
```

Ou, na interface gráfica do JMC, use `File > Open File...` e selecione o `.jfr` desejado. As abas mais relevantes são *Method Profiling*, *Garbage Collections*, *Threads* e *Lock Instances*.

## 8. Macrobenchmarks Apache Spark (Etapa 2)

O Spark roda como job separado (fora do JMH) e mede o tempo total de execução em quatro abordagens que isolam eixos ortogonais: API (RDD vs SQL), formato (CSV vs Parquet) e estilo de execução (`mapPartitions` sem shuffle vs UDF + `groupBy` com shuffle).

Pré-passo obrigatório apenas para a abordagem com Parquet: converter o CSV uma única vez.

```bash
mvn clean install
./run-etapa2-spark.sh              # roda as quatro abordagens em sequência
./run-etapa2-spark-dfinfer.sh      # apenas DataFrame + CSV (SQL puro)
./run-etapa2-spark-dfparquet-sql.sh # apenas Dataset + Parquet
```

> Os scripts definem `spark.local.dir=./artifacts`, então o Spark cria diretórios temporários `artifacts/spark-<uuid>/` durante a execução. Podem ser removidos com segurança ao final (`rm -rf artifacts/spark-*`).

## 9. Estrutura do Projeto

```
Java/
├── pom.xml                      # Dependências e plugins (JMH, JCStress, JMeter, Spark, Shade)
├── plano.jmx                    # Plano de teste do JMeter
├── run-etapa2-*.sh              # Scripts auxiliares (JMH, JMeter, Spark, JCStress da Etapa 2)
├── src/main/java/br/ufrn/imd/
│   ├── Main.java                # Ponto de entrada manual
│   ├── core/                    # Impls Etapa 1 (Serial, None, Mutex, Semaphore, Volatile,
│   │                            #   Atomic, ProducerConsumer) + Etapa 2 (ForkJoin,
│   │                            #   ParallelStream, CompletableFuture, StructuredConcurrency,
│   │                            #   ScopedContext)
│   ├── config/                  # ExecutionConfig, BenchmarkConfig, enums
│   ├── io/                      # CsvDatasetReader
│   ├── utils/                   # ExecutorFactory (Platform vs Virtual)
│   ├── geraDataSet/             # Gerador do CSV de 1 GB
│   ├── model/                   # DataSet (arrays primitivos)
│   └── benchmark/
│       ├── JMH/                 # IDWFullProcessBenchmark + benchmarks isolados da Etapa 2
│       ├── jmeter/              # IDWJMeterSampler
│       └── jcstress/            # IDWRaceConditionTest, IDWEtapa2CorrectnessTest
├── src/main/spark-java/br/ufrn/imd/spark/
│   ├── IDWSparkRDDImpl.java              # RDD + CSV, mapPartitions + reduce
│   ├── IDWSparkSqlImpl.java              # DataFrame + CSV, SQL puro
│   ├── IDWSparkDatasetParquetImpl.java   # Dataset<Sensor> + Parquet
│   ├── IDWSparkDataFrameParquetImpl.java # DataFrame + UDF Haversine + groupBy
│   └── CsvToParquet.java                 # Converte sensores.csv em sensores.parquet
└── benchmark-results/
    ├── jmh/, jmeter/, jcstress/  # Etapa 1
    └── etapa2/                   # Etapa 2 (JMH e Spark)
```

## 10. Solução de Problemas

- **`mvn` não encontra o JDK 26**: verifique `JAVA_HOME` apontando para `$(brew --prefix openjdk@26)/libexec/openjdk.jdk/Contents/Home` (ou equivalente).
- **`Dataset não encontrado`**: rode novamente o passo 2; o arquivo precisa estar em `../datasets/sensores.csv` relativo a `Java/`.
- **`jmeter` falha por falta de memória**: aumente o *heap* do JMeter exportando `HEAP="-Xms2g -Xmx4g"` antes do comando.
- **ZGC ou Generational ZGC não reconhecidos**: confirme que está rodando JDK 21 ou superior. Para versões antigas, troque `-XX:+UseZGC -XX:+ZGenerational` por apenas `-XX:+UseZGC`.
