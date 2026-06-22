# Projeto IDW Concorrente — Implementação Java

Implementação em **Java 26** do algoritmo de Interpolação por Distância Inversa Ponderada (IDW), com 10 cenários de execução cobrindo as combinações de tipo de thread (Platform/Virtual) e primitivas de sincronização (NONE, MUTEX, SEMAPHORE, VOLATILE, ATOMIC, Producer-Consumer).

## 1. Pré-requisitos

| Ferramenta | Versão | Instalação no macOS |
|---|---|---|
| **JDK** | 26 (ou superior) | `brew install openjdk@26` |
| **Maven** | 3.9+ | `brew install maven` |
| **Apache JMeter** | 5.6.3 | `brew install jmeter` (necessário só para macrobenchmark) |
| **JDK Mission Control** | 9+ | `brew install --cask jdk-mission-control` (opcional, para visualizar JFR) |

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

Mede o tempo médio do pipeline completo (IO + cálculo) para cada cenário, com fase de aquecimento explícita e múltiplos *forks* da JVM.

```bash
# Compilar
mvn clean install

# Rodar todos os 10 cenários
java -jar target/benchmarks.jar IDWFullProcessBenchmark

# Salvar resultados em CSV/JSON
java -jar target/benchmarks.jar IDWFullProcessBenchmark -rf csv  -rff resultados-jmh.csv
java -jar target/benchmarks.jar IDWFullProcessBenchmark -rf json -rff resultados-jmh.json

# Rodar apenas um cenário específico
java -jar target/benchmarks.jar IDWFullProcessBenchmark -p scenario=SERIAL
```

> A bateria completa demora cerca de 40 minutos. Os resultados de referência já estão em `benchmark-results/jmh/jmh-todos-cenarios.csv`.

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

Prova formalmente as race conditions dos cenários NONE e VOLATILE, e a corretude dos cenários MUTEX, SEMAPHORE e ATOMIC.

```bash
# Todos os 5 testes (demora alguns minutos)
mvn jcstress:run

# Apenas um teste específico
mvn jcstress:run -Djcstress.tests=IDWPartialSumRaceTest
```

O relatório HTML é salvo em `target/jcstress/index.html`. Abra no navegador para ver, por teste, quais *interleavings* foram observados e a classificação de cada um (`ACCEPTABLE`, `ACCEPTABLE_INTERESTING`, `FORBIDDEN`).

## 7. Profiling com JFR/JMC

Os comandos do macrobenchmark acima já incluem a flag `-XX:StartFlightRecording=...`, que gera arquivos `.jfr` junto com cada execução. Para visualizar:

```bash
# Abre o JMC com o arquivo
jmc -open g1.jfr
```

Ou, na interface gráfica do JMC, use `File > Open File...` e selecione o `.jfr` desejado. As abas mais relevantes são *Method Profiling*, *Garbage Collections*, *Threads* e *Lock Instances*.

## 8. Estrutura do Projeto

```
Java/
├── pom.xml                      # Dependências e plugins (JMH, JCStress, JMeter)
├── plano.jmx                    # Plano de teste do JMeter
├── src/main/java/br/ufrn/imd/
│   ├── Main.java                # Ponto de entrada manual
│   ├── core/                    # Implementações do algoritmo (Serial + 9 concorrentes)
│   ├── config/                  # ExecutionConfig, BenchmarkConfig, enums
│   ├── io/                      # CsvDatasetReader
│   ├── utils/                   # ExecutorFactory (Platform vs Virtual)
│   ├── geraDataSet/             # Gerador do CSV de 1 GB
│   ├── model/                   # DataSet (arrays primitivos)
│   └── benchmark/
│       ├── JMH/                 # IDWFullProcessBenchmark
│       ├── jmeter/              # IDWJMeterSampler
│       └── jcstress/            # IDWRaceConditionTest
└── benchmark-results/           # Resultados de referência (já incluídos)
    ├── jmh/
    ├── jmeter/
    └── jcstress/
```

## 9. Solução de Problemas

- **`mvn` não encontra o JDK 26**: verifique `JAVA_HOME` apontando para `$(brew --prefix openjdk@26)/libexec/openjdk.jdk/Contents/Home` (ou equivalente).
- **`Dataset não encontrado`**: rode novamente o passo 2; o arquivo precisa estar em `../datasets/sensores.csv` relativo a `Java/`.
- **`jmeter` falha por falta de memória**: aumente o *heap* do JMeter exportando `HEAP="-Xms2g -Xmx4g"` antes do comando.
- **ZGC ou Generational ZGC não reconhecidos**: confirme que está rodando JDK 21 ou superior. Para versões antigas, troque `-XX:+UseZGC -XX:+ZGenerational` por apenas `-XX:+UseZGC`.
