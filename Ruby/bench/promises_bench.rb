# frozen_string_literal: true

# Microbenchmark do cenário #12 da Etapa 2 (Concurrent::Promises).
# Equivalente Ruby de Java/.../benchmark/JMH/IDWCompletableFutureBenchmark.java.
#
# Isolado do full_process_bench.rb (Etapa 1) para não re-executar os 10
# cenários da Etapa 1 sempre que quisermos medir só o novo.

require 'benchmark/ips'

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))
require 'idw/config'
require 'idw/execution_config'
require 'idw/promises'

DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{DATASET}" unless File.exist?(DATASET)

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE

CONFIG = IDW::ExecutionConfig.new(
  name: 'PROMISES',
  io_thread_type: :virtual,
  io_threads: IDW::Config::IO_THREADS,
  compute_thread_type: :platform,
  compute_threads: IDW::Config::COMPUTE_THREADS,
  sync_type: :none,
  chunk_size: IDW::Config::CHUNK_SIZE
)

WARMUP_SECONDS = Integer(ENV.fetch('WARMUP', 30))
TIME_SECONDS   = Integer(ENV.fetch('TIME', 60))

puts "dataset:      #{DATASET}"
puts "query (x,y):  #{XQ}, #{YQ}"
puts "warmup (s):   #{WARMUP_SECONDS}"
puts "time (s):     #{TIME_SECONDS}"
puts

Benchmark.ips do |x|
  x.warmup = WARMUP_SECONDS
  x.time   = TIME_SECONDS

  x.report('PROMISES') do
    IDW::Promises.new.execute_full_process(DATASET, XQ, YQ, CONFIG)
  end
end
