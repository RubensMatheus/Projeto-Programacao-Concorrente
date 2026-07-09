# frozen_string_literal: true

# Microbenchmark do cenário #10 da Etapa 2 (Ractors + partição estática).
# Equivalente Ruby de Java/.../benchmark/JMH/IDWForkJoinBenchmark.java.
#
# Política oficial: leitura no coordenador via Fibers, cálculo em Ractors
# com slices congelados enviados por mensagem. Ver ractor_io_tradeoff.rb
# para o comparativo dos três modos possíveis (A/B/C).

require 'benchmark/ips'

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))
require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/partitioned_ractor'

DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{DATASET}" unless File.exist?(DATASET)

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE

CONFIG = IDW::ExecutionConfig.new(
  name: 'PARTITIONED_RACTOR',
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

reader = IDW::CsvReader.new
impl   = IDW::PartitionedRactor.new

# Cada iteração re-executa o pipeline completo (leitura + cálculo),
# espelhando o full_process_bench.rb da Etapa 1. Assim o número inclui
# o custo de IO (Fibers) + cópia de slices para Ractors + cálculo paralelo.
Benchmark.ips do |x|
  x.warmup = WARMUP_SECONDS
  x.time   = TIME_SECONDS

  x.report('PARTITIONED_RACTOR') do
    dataset = reader.read(DATASET, CONFIG)
    impl.execute_computation(dataset, XQ, YQ, CONFIG)
  end
end
