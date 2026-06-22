# frozen_string_literal: true

require_relative 'idw/config'
require_relative 'idw/execution_config'
require_relative 'idw/csv_reader'
require_relative 'idw/serial'
require_relative 'idw/producer_consumer'

# Runner da Fase 4 — roda SERIAL (referência) + cenário 9 (PRODUCER_CONSUMER).

path = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{path}" unless File.exist?(path)

pc_cfg = IDW::ExecutionConfig.new(
  name: 'PRODUCER_CONSUMER',
  io_thread_type: :virtual,
  io_threads: IDW::Config::IO_THREADS,
  compute_thread_type: :platform,
  compute_threads: IDW::Config::COMPUTE_THREADS,
  sync_type: :producer_consumer,
  chunk_size: IDW::Config::CHUNK_SIZE
)

puts "Carregando dataset com IO paralela (#{IDW::Config::IO_THREADS} threads)..."
t0      = Process.clock_gettime(Process::CLOCK_MONOTONIC)
dataset = IDW::CsvReader.new.read(path, pc_cfg)
io_time = Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0
puts format('  io_elapsed_seconds: %.3f  (linhas: %d)', io_time, dataset.size)
puts

xq = IDW::Config::QUERY_LONGITUDE
yq = IDW::Config::QUERY_LATITUDE

t0       = Process.clock_gettime(Process::CLOCK_MONOTONIC)
baseline = IDW::Serial.new.execute_computation(dataset, xq, yq)
ser_time = Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0
puts format('SERIAL              idw=%.15f   compute=%.3fs   (referência)', baseline, ser_time)
puts

puts "Producer-Consumer: 1 produtor (#{pc_cfg.io_thread_type}), " \
     "#{pc_cfg.compute_threads} consumidores (#{pc_cfg.compute_thread_type}), " \
     "chunk_size=#{pc_cfg.chunk_size}, queue_cap=#{pc_cfg.compute_threads * 4}, " \
     "poison_pills=#{pc_cfg.compute_threads}"
t0   = Process.clock_gettime(Process::CLOCK_MONOTONIC)
val  = IDW::ProducerConsumer.new.execute(dataset, xq, yq, pc_cfg)
dt   = Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0
diff = (val - baseline).abs
puts format('PRODUCER_CONSUMER   idw=%.15f   compute=%.3fs   |diff|=%.3e', val, dt, diff)
