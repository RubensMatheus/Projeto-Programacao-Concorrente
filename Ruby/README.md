# Projeto IDW Concorrente — Implementação Ruby

Implementação em **Ruby 3.2+** (testada com MRI 3.3.0 com YJIT habilitado) do algoritmo de Interpolação por Distância Inversa Ponderada (IDW). Cobre as mesmas 10 versões do projeto Java, mapeando *platform threads* para `Thread` e *virtual threads* para `Fiber`, dentro das limitações impostas pela GVL do MRI.

## 1. Pré-requisitos

| Ferramenta | Versão | Instalação no macOS |
|---|---|---|
| **Ruby** | 3.2+ (recomendado 3.3.0) | `brew install ruby` ou via `rbenv install 3.3.0` |
| **Bundler** | qualquer recente | `gem install bundler` |

Confirme as versões:

```bash
ruby -v          # deve mostrar 3.2+ (3.3.0 nos testes de referência)
bundle -v        # deve mostrar bundler instalado
```

## 2. Instalar as Dependências

A partir da pasta `Ruby/`:

```bash
bundle install
```

Isso instala as gems do `Gemfile`: `async`, `concurrent-ruby`, `benchmark-ips` e `stackprof` (para profiling).

## 3. Pré-requisito: Gerar o Dataset

O Ruby compartilha o mesmo dataset (`datasets/sensores.csv`, ~1 GB) com o projeto Java. Se ainda não tiver gerado, siga o passo 2 do `README.md` em `Java/` antes de continuar. O arquivo deve estar em `../datasets/sensores.csv` relativo a `Ruby/`.

## 4. Rodar o Pipeline Manualmente

Execução simples (versão serial + produtor-consumidor) para verificar que tudo está funcionando:

```bash
bundle exec ruby lib/main.rb
```

Imprime os valores IDW interpolados e o tempo gasto em cada fase. O ponto de consulta é o mesmo do Java (definido em `lib/idw/config.rb`), garantindo comparabilidade.

## 5. Rodar um Único Cenário

Útil para investigação focada. Defina o cenário via variável de ambiente:

```bash
SCENARIO=SERIAL              bundle exec ruby bench/single_run.rb
SCENARIO=NONE_PP             bundle exec ruby bench/single_run.rb
SCENARIO=MUTEX               bundle exec ruby bench/single_run.rb
SCENARIO=ATOMIC              bundle exec ruby bench/single_run.rb
SCENARIO=PRODUCER_CONSUMER   bundle exec ruby bench/single_run.rb
```

Cenários disponíveis: `SERIAL`, `NONE_PP`, `NONE_VV`, `NONE_PV`, `NONE_VP`, `MUTEX`, `SEMAPHORE`, `VOLATILE`, `ATOMIC`, `PRODUCER_CONSUMER`.

## 6. Comparativo Rápido (SERIAL vs MUTEX)

```bash
bundle exec ruby bench/serial_mutex_run.rb
```

Roda apenas as duas versões (Serial e Mutex) com tempo *wall-clock*. Mais rápido que a bateria completa, útil para sanidade.

## 7. Microbenchmark Completo (benchmark-ips)

Bateria com todos os 10 cenários, com fase de aquecimento explícita (30 s) e janela de medição longa (60 s) para acomodar o YJIT.

```bash
bundle exec ruby bench/full_process_bench.rb
```

A execução demora aproximadamente 15 minutos. A saída de referência está em `bench/last_full_process.log` (gerada na última bateria).

## 8. Profiling com stackprof

O `stackprof` é o profiler in-process usado neste projeto (substituiu o `rbspy`, que apresenta instabilidade no macOS com Apple Silicon). Para gerar o flamegraph de um cenário específico:

```bash
# 1. Capturar amostras
SCENARIO=NONE_VP PROFILE=1 bundle exec ruby bench/single_run.rb

# 2. Converter o dump em flamegraph HTML
bundle exec stackprof --flamegraph-html bench/profiles/NONE_VP.dump \
    > bench/profiles/profile_NONE_VP.html

# 3. Abrir no navegador
open bench/profiles/profile_NONE_VP.html
```

> Os flamegraphs de referência das versões `NONE_VP` (Thread) e `NONE_VV` (Fiber) já estão disponíveis em `bench/profiles/`.

## 9. Estrutura do Projeto

```
Ruby/
├── Gemfile                      # Dependências
├── Gemfile.lock
├── lib/
│   ├── main.rb                  # Ponto de entrada manual
│   └── idw/
│       ├── config.rb            # Constantes (raio da Terra, ponto de consulta, etc.)
│       ├── execution_config.rb  # Configuração de cenário
│       ├── csv_reader.rb        # Leitura do CSV (com IO paralela)
│       ├── data_set.rb          # Arrays primitivos
│       ├── executor_factory.rb  # Fábrica Thread vs Fiber
│       ├── concurrent_base.rb   # Classe-base abstrata
│       ├── serial.rb            # Versão serial (referência)
│       ├── none.rb              # Sem sincronização
│       ├── mutex.rb             # Mutex#synchronize
│       ├── semaphore.rb         # Concurrent::Semaphore
│       ├── volatile.rb          # (cópia funcional de None — sem volatile no MRI)
│       ├── atomic.rb            # Redução local + soma final
│       └── producer_consumer.rb # SizedQueue
└── bench/
    ├── full_process_bench.rb    # Bateria completa (benchmark-ips)
    ├── single_run.rb            # Roda um único cenário
    ├── serial_mutex_run.rb      # SERIAL + MUTEX em wall-clock
    ├── last_full_process.log    # Saída de referência
    └── profiles/                # Flamegraphs do stackprof
```

## 10. Observações Importantes Sobre Limitações do MRI

- **GVL (Global VM Lock):** No MRI, apenas uma thread executa código Ruby por vez. Por isso, as versões com `Thread` **não trazem ganho de paralelismo de CPU** sobre o Serial. Esse é o resultado esperado e está discutido em detalhes no `RELATORIO.md` (capítulo 1.2 e 4.4).
- **Macrobenchmark e GCs:** Não foi executado equivalente ao JMeter+G1/Parallel/ZGC do Java, pois (a) o MRI tem um único coletor, sem variantes configuráveis, e (b) submeter o processo a múltiplos "usuários virtuais" disputando a GVL não acrescenta informação relevante. A justificativa está no relatório (seções 2.3.2 e 4.3.3).
- **JCStress (stress test):** Não há equivalente em Ruby. O modelo de memória do MRI não é especificado formalmente, e qualquer laço de stress manual seria mascarado pela GVL. Justificativa no relatório (seções 2.3.3 e 4.3.1).

## 11. Solução de Problemas

- **`bundle install` falha em compilar gemas nativas:** instale as ferramentas de desenvolvimento da Apple com `xcode-select --install`.
- **`Dataset não encontrado`:** rode o gerador no projeto Java (passo 2 do `Java/README.md`). O CSV deve estar em `../datasets/sensores.csv` relativo a `Ruby/`.
- **YJIT não está ativo:** confirme com `ruby --yjit -v` ou `RUBY_YJIT_ENABLE=1 bundle exec ruby ...`. A partir do Ruby 3.3 ele costuma vir habilitado por padrão nos benchmarks via flag interna do `benchmark-ips`.
- **Erro de permissão ao executar stackprof:** o profiler in-process não exige privilégios; se houver erro, verifique se a gem foi instalada (`bundle list | grep stackprof`).
