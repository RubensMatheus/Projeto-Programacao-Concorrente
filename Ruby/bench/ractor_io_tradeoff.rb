# frozen_string_literal: true

# Compara os três modos de operar os Ractors no cenário #10:
#
#   A) execute_full_process:
#      cada Ractor abre o CSV, pula linhas até seu range e parseia.
#      IO redundante (N Ractors × 1 scan cada), mas nenhuma cópia entre
#      Ractors. É o modo alinhado à política "Ractor de ponta a ponta".
#
#   B) execute_computation com dataset pré-carregado SEQUENCIAL:
#      main lê o CSV UMA vez em serial, fatia em N slices congelados,
#      envia cada slice para um Ractor via message passing.
#
#   C) execute_computation com dataset pré-carregado por FIBERS:
#      main lê o CSV UMA vez com IO paralelo via Fibers (CsvReader com
#      io_thread_type=:virtual), depois envia slices para os Ractors.
#      A GVL é liberada em syscalls de IO, então múltiplas Fibers podem
#      sobrepor leitura de faixas distintas do arquivo.
#
# O relatório precisa mostrar qual dos três ganha para o dataset ~1 GB.

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))

require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/partitioned_ractor'

DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{DATASET}" unless File.exist?(DATASET)

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE
CT = Integer(ENV.fetch('COMPUTE_THREADS', IDW::Config::COMPUTE_THREADS))

config = IDW::ExecutionConfig.new(
  name: 'RACTOR_TRADEOFF',
  io_thread_type: :platform,
  io_threads: IDW::Config::IO_THREADS,
  compute_thread_type: :platform,
  compute_threads: CT,
  sync_type: :none,
  chunk_size: IDW::Config::CHUNK_SIZE
)

def timed
  t0 = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  v  = yield
  [v, Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0]
end

puts "dataset:         #{DATASET}"
puts "compute workers: #{CT}"
puts

# Pré-carrega o dataset em duas versões (fora da medição de compute).
serial_cfg = IDW::ExecutionConfig.new(
  name: 'PRELOAD_SERIAL', io_thread_type: :platform, io_threads: 1,
  compute_thread_type: :platform, compute_threads: 1,
  sync_type: :none, chunk_size: IDW::Config::CHUNK_SIZE
)
fiber_cfg = IDW::ExecutionConfig.new(
  name: 'PRELOAD_FIBER', io_thread_type: :virtual,
  io_threads: Integer(ENV.fetch('IO_FIBERS', IDW::Config::IO_THREADS)),
  compute_thread_type: :platform, compute_threads: 1,
  sync_type: :none, chunk_size: IDW::Config::CHUNK_SIZE
)

puts 'pre-carregando dataset (fora da medição)...'
preload_serial, t_ps = timed { IDW::CsvReader.new.read(DATASET, serial_cfg) }
puts format('  serial:  n=%d, t=%.3fs', preload_serial.latitudes.length, t_ps)
preload_fiber, t_pf  = timed { IDW::CsvReader.new.read(DATASET, fiber_cfg) }
puts format('  fibers (%d): n=%d, t=%.3fs',
            fiber_cfg.io_threads, preload_fiber.latitudes.length, t_pf)
puts

CASES = [
  ['PARTITIONED_RACTOR (A: full_process, IO em cada Ractor)', -> {
    IDW::PartitionedRactor.new.execute_full_process(DATASET, XQ, YQ, config)
  }],
  ['PARTITIONED_RACTOR (B: computation, IO serial + slices)', -> {
    IDW::PartitionedRactor.new.execute_computation(preload_serial, XQ, YQ, config)
  }],
  ['PARTITIONED_RACTOR (C: computation, IO fibers + slices)', -> {
    IDW::PartitionedRactor.new.execute_computation(preload_fiber, XQ, YQ, config)
  }]
].freeze

puts format('%-58s %-22s %10s', 'caso', 'IDW', 't (s)')
puts '-' * 96
reference = nil
CASES.each do |label, runnable|
  value, elapsed = timed { runnable.call }
  reference ||= value
  rel = ((value - reference) / reference).abs
  marker = rel <= 1e-12 ? 'OK' : "DIVERGE(rel=#{format('%.2e', rel)})"
  puts format('%-58s %-22.15f %10.3f   %s', label, value, elapsed, marker)
end

puts
puts 'Pipeline total (IO + compute) para os modos B e C:'
puts format('  B (IO serial):   %.3fs (%.3f preload + compute)', t_ps + 0, t_ps)
puts format('  C (IO fibers):   %.3fs (%.3f preload + compute)', t_pf + 0, t_pf)
puts '  (some o preload ao tempo de compute correspondente na tabela acima)'
