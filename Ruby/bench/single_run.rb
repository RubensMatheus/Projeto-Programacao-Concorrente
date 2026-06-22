# frozen_string_literal: true

# Runner one-shot de UM cenário — usado para profiling focado em UM
# cenário (não a mistura dos 10 do `full_process_bench.rb`).
#
# Profiler: `stackprof` (in-process). Substituiu `rbspy` na Fase 5 porque
# `rbspy 0.48` falha sistematicamente no macOS Tahoe / Apple Silicon
# (ptrace instável → ~75% das amostras descartadas, flamegraph inútil).
# `stackprof` não depende de ptrace; o trade-off é competir pelo GVL com
# o processo medido (overhead pequeno, mas existe — documentar no relatório).
#
# Habilitar via env `PROFILE=1`; saída em `bench/profiles/<scenario>.dump`,
# convertida em SVG por `stackprof --flamegraph` (etapa pós-medição).
#
# Exemplo:
#   SCENARIO=NONE_VP PROFILE=1 bundle exec ruby bench/single_run.rb
#   bundle exec stackprof --flamegraph-html bench/profiles/NONE_VP.dump \
#       > bench/profiles/profile_platform_NONE_VP.html

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

DATASET  = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
SCENARIO = ENV.fetch('SCENARIO', 'NONE_VP')

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE

def cfg(name, io_tt, compute_tt, sync_type, compute_threads: IDW::Config::COMPUTE_THREADS)
  IDW::ExecutionConfig.new(
    name: name, io_thread_type: io_tt, io_threads: IDW::Config::IO_THREADS,
    compute_thread_type: compute_tt, compute_threads: compute_threads,
    sync_type: sync_type, chunk_size: IDW::Config::CHUNK_SIZE
  )
end

RUNNERS = {
  'SERIAL' => -> {
    c = cfg('SERIAL', :platform, :platform, :none, compute_threads: 1)
    ds = IDW::CsvReader.new.read(DATASET, c)
    IDW::Serial.new.execute_computation(ds, XQ, YQ)
  },
  'NONE_PP'           => -> { IDW::None.new.execute_full_process(DATASET, XQ, YQ, cfg('NONE_PP', :platform, :platform, :none)) },
  'NONE_VV'           => -> { IDW::None.new.execute_full_process(DATASET, XQ, YQ, cfg('NONE_VV', :virtual, :virtual, :none)) },
  'NONE_PV'           => -> { IDW::None.new.execute_full_process(DATASET, XQ, YQ, cfg('NONE_PV', :platform, :virtual, :none)) },
  'NONE_VP'           => -> { IDW::None.new.execute_full_process(DATASET, XQ, YQ, cfg('NONE_VP', :virtual, :platform, :none)) },
  'MUTEX'             => -> { IDW::Mutex.new.execute_full_process(DATASET, XQ, YQ, cfg('MUTEX', :virtual, :platform, :mutex)) },
  'SEMAPHORE'         => -> { IDW::Semaphore.new.execute_full_process(DATASET, XQ, YQ, cfg('SEMAPHORE', :virtual, :platform, :semaphore)) },
  'VOLATILE'          => -> { IDW::Volatile.new.execute_full_process(DATASET, XQ, YQ, cfg('VOLATILE', :virtual, :platform, :volatile)) },
  'ATOMIC'            => -> { IDW::Atomic.new.execute_full_process(DATASET, XQ, YQ, cfg('ATOMIC', :virtual, :platform, :atomic)) },
  'PRODUCER_CONSUMER' => -> { IDW::ProducerConsumer.new.execute_full_process(DATASET, XQ, YQ, cfg('PRODUCER_CONSUMER', :virtual, :platform, :producer_consumer)) }
}.freeze

runner = RUNNERS[SCENARIO] or abort "SCENARIO inválido: #{SCENARIO}. Opções: #{RUNNERS.keys.join(', ')}"

profile_dump = nil
if ENV['PROFILE'] == '1'
  require 'stackprof'
  profile_dir  = File.expand_path('profiles', __dir__)
  Dir.mkdir(profile_dir) unless Dir.exist?(profile_dir)
  profile_dump = File.join(profile_dir, "#{SCENARIO}.dump")
  StackProf.start(mode: :wall, out: profile_dump, raw: true, interval: 1_000)
end

t0  = Process.clock_gettime(Process::CLOCK_MONOTONIC)
val = runner.call
dt  = Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0

if ENV['PROFILE'] == '1'
  StackProf.stop
  StackProf.results(profile_dump)
  puts "stackprof dump: #{profile_dump}"
end

puts format('scenario=%s idw=%.15f elapsed=%.3fs', SCENARIO, val, dt)
