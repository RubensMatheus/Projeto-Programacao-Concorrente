# frozen_string_literal: true

# Microbenchmark do pipeline COMPLETO (IO + cálculo) para os 10 cenários
# obrigatórios — equivalente Ruby do Java/IDWFullProcessBenchmark.java (JMH).
#
# Espelha o `@Param`/`@Setup`/`@Benchmark` do JMH usando `benchmark-ips`:
#   - `x.warmup` explícito (espelha `@Warmup` — aquece OS page cache, YJIT
#     se disponível, alocações);
#   - `x.time` define a janela de medição;
#   - 1 iteração por cenário toma ~25-50 s (IO ~8 s morno + compute 13-37 s),
#     então usa-se time/warmup longos.
#
# Dataset (~1 GB) é compartilhado com o Java; depois do 1º cold read fica em
# page cache do macOS, então as iterações seguintes ficam dominadas pela
# fase compute.

require 'benchmark/ips'

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))
require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/serial'
require 'idw/mutex'
require 'idw/semaphore'
require 'idw/volatile'
require 'idw/atomic'
require 'idw/none'
require 'idw/producer_consumer'

DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{DATASET}" unless File.exist?(DATASET)

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE

def cfg(name, io_tt, compute_tt, sync_type, compute_threads: IDW::Config::COMPUTE_THREADS)
  IDW::ExecutionConfig.new(
    name: name,
    io_thread_type: io_tt,
    io_threads: IDW::Config::IO_THREADS,
    compute_thread_type: compute_tt,
    compute_threads: compute_threads,
    sync_type: sync_type,
    chunk_size: IDW::Config::CHUNK_SIZE
  )
end

# Cada entrada: [label, lambda que executa o pipeline completo].
# A leitura do CSV é repetida a cada iteração — espelha o JMH (que também
# inclui IO no @Benchmark) e mede sob page cache morno após o warmup.
SCENARIOS = [
  ['SERIAL', -> {
    c = cfg('SERIAL', :platform, :platform, :none, compute_threads: 1)
    ds = IDW::CsvReader.new.read(DATASET, c)
    IDW::Serial.new.execute_computation(ds, XQ, YQ)
  }],
  ['NONE_PP', -> {
    c = cfg('NONE_PP', :platform, :platform, :none)
    IDW::None.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['NONE_VV', -> {
    c = cfg('NONE_VV', :virtual, :virtual, :none)
    IDW::None.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['NONE_PV', -> {
    c = cfg('NONE_PV', :platform, :virtual, :none)
    IDW::None.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['NONE_VP', -> {
    c = cfg('NONE_VP', :virtual, :platform, :none)
    IDW::None.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['MUTEX', -> {
    c = cfg('MUTEX', :virtual, :platform, :mutex)
    IDW::Mutex.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['SEMAPHORE', -> {
    c = cfg('SEMAPHORE', :virtual, :platform, :semaphore)
    IDW::Semaphore.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['VOLATILE', -> {
    c = cfg('VOLATILE', :virtual, :platform, :volatile)
    IDW::Volatile.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['ATOMIC', -> {
    c = cfg('ATOMIC', :virtual, :platform, :atomic)
    IDW::Atomic.new.execute_full_process(DATASET, XQ, YQ, c)
  }],
  ['PRODUCER_CONSUMER', -> {
    c = cfg('PRODUCER_CONSUMER', :virtual, :platform, :producer_consumer)
    IDW::ProducerConsumer.new.execute_full_process(DATASET, XQ, YQ, c)
  }]
].freeze

# Permite restringir a um subconjunto via env (útil para rbspy).
selected = (ENV['SCENARIOS'] || '').split(',').map(&:strip).reject(&:empty?)
to_run   = selected.empty? ? SCENARIOS : SCENARIOS.select { |n, _| selected.include?(n) }

# warmup/time em SEGUNDOS (não iterações). Cada iteração custa ~25-50 s,
# então warmup=30 garante ao menos 1 iteração de aquecimento (page cache,
# alocações) e time=60 dá ~1-2 medições por cenário — orçamento mínimo
# viável para um pipeline desse porte.
WARMUP_SECONDS = Integer(ENV.fetch('WARMUP', 30))
TIME_SECONDS   = Integer(ENV.fetch('TIME', 60))

puts "dataset:      #{DATASET}"
puts "query (x,y):  #{XQ}, #{YQ}"
puts "warmup (s):   #{WARMUP_SECONDS}"
puts "time (s):     #{TIME_SECONDS}"
puts "cenários:     #{to_run.map(&:first).join(', ')}"
puts

Benchmark.ips do |x|
  x.warmup = WARMUP_SECONDS
  x.time   = TIME_SECONDS

  to_run.each do |label, runnable|
    x.report(label) { runnable.call }
  end

  x.compare!
end
