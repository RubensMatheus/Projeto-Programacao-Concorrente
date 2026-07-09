# frozen_string_literal: true

# Smoke test das 5 implementações da Etapa 2. Roda cada uma UMA vez sobre
# o dataset completo e compara o IDW resultante com o baseline serial.
# Objetivo: validar corretude numérica antes de investir em benchmark
# (`benchmark-ips`) completo.
#
# Uso:
#   bundle exec ruby bench/smoke_etapa2.rb
#
# Variáveis de ambiente:
#   DATASET        caminho do CSV (default: config)
#   SCENARIOS      subconjunto por vírgula (ex.: "PROMISES,ASYNC_SCOPE")
#   COMPUTE_THREADS override do nº de workers (default: config)

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))

require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/serial'
require 'idw/promises'
require 'idw/async_scope'
require 'idw/partitioned_ractor'

DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
abort "Dataset não encontrado: #{DATASET}" unless File.exist?(DATASET)

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE
CT = Integer(ENV.fetch('COMPUTE_THREADS', IDW::Config::COMPUTE_THREADS))

def cfg(name, io_tt, compute_tt, compute_threads: CT)
  IDW::ExecutionConfig.new(
    name: name,
    io_thread_type: io_tt,
    io_threads: IDW::Config::IO_THREADS,
    compute_thread_type: compute_tt,
    compute_threads: compute_threads,
    sync_type: :none,
    chunk_size: IDW::Config::CHUNK_SIZE
  )
end

# Baseline: serial (referência numérica).
serial_cfg = cfg('SERIAL', :platform, :platform, compute_threads: 1)
serial_ds  = IDW::CsvReader.new.read(DATASET, serial_cfg)

def timed
  t0 = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  v  = yield
  [v, Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0]
end

# NOTE: Ractors não replicam bit-a-bit a redução do serial (a ordem das
# somas dos parciais muda), então a comparação é por tolerância relativa.
EPS_REL = 1e-12

# Cada entrada: [label, lambda -> Float].
SCENARIOS = [
  ['SERIAL', -> {
    IDW::Serial.new.execute_computation(serial_ds, XQ, YQ)
  }],
  ['PROMISES', -> {
    IDW::Promises.new.execute_full_process(DATASET, XQ, YQ, cfg('PROMISES', :virtual, :platform))
  }],
  ['ASYNC_SCOPE', -> {
    IDW::AsyncScope.new.execute_full_process(DATASET, XQ, YQ, cfg('ASYNC_SCOPE', :virtual, :platform))
  }],
  ['PARTITIONED_RACTOR', -> {
    # Política oficial: leitura no coordenador via Fibers, cálculo em Ractors.
    ds = IDW::CsvReader.new.read(DATASET, cfg('PARTITIONED_RACTOR_IO', :virtual, :platform))
    IDW::PartitionedRactor.new.execute_computation(ds, XQ, YQ, cfg('PARTITIONED_RACTOR', :virtual, :platform))
  }]
].freeze

selected = (ENV['SCENARIOS'] || '').split(',').map(&:strip).reject(&:empty?)
to_run   = selected.empty? ? SCENARIOS : SCENARIOS.select { |n, _| selected.include?(n) }

puts "dataset:        #{DATASET}"
puts "query (x,y):    #{XQ}, #{YQ}"
puts "compute workers: #{CT}"
puts "cenários:       #{to_run.map(&:first).join(', ')}"
puts

reference = nil
puts format('%-22s %-22s %10s   %s', 'cenário', 'IDW', 't (s)', 'status')
puts '-' * 80

to_run.each do |label, runnable|
  value, elapsed = timed { runnable.call }
  reference ||= value

  status =
    if label == 'SERIAL'
      'BASELINE'
    else
      rel = ((value - reference) / reference).abs
      rel <= EPS_REL ? "OK (rel=#{format('%.1e', rel)})" : "DIVERGE (rel=#{format('%.3e', rel)})"
    end

  puts format('%-22s %-22.15f %10.3f   %s', label, value, elapsed, status)
end
