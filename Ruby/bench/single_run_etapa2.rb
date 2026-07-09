# frozen_string_literal: true

# Runner one-shot de UM cenário da Etapa 2, com profiling opcional via
# stackprof. Análogo do `single_run.rb` da Etapa 1.
#
# Uso:
#   SCENARIO=PROMISES bundle exec ruby bench/single_run_etapa2.rb
#   SCENARIO=PARTITIONED_RACTOR PROFILE=1 bundle exec ruby bench/single_run_etapa2.rb
#
# Cenários válidos:
#   PROMISES
#   ASYNC_SCOPE
#   PARTITIONED_RACTOR
#
# Com PROFILE=1, grava em bench/profiles/<SCENARIO>.dump. Converter em
# flamegraph HTML depois (fora da medição):
#   bundle exec stackprof --d3-flamegraph bench/profiles/PROMISES.dump \
#       > bench/profiles/profile_PROMISES.html
#
# Nota importante sobre o alcance do stackprof:
#   - Fase IO (CsvReader) roda no fiber principal, é amostrada.
#   - Cenários cujo cálculo roda em Threads nativas separadas (PROMISES,
#     ASYNC_SCOPE): stackprof só vê a coordenação; o loop de Haversine
#     dentro das threads NÃO aparece porque stackprof é in-process no
#     fiber onde foi iniciado.
#   - PARTITIONED_RACTOR: o cálculo roda em Ractors com GVL isolado;
#     stackprof não os enxerga.
# Esta é uma limitação real do stackprof (contraste com JFR do Java) e
# vale documentar no relatório.
#
# Nota: stackprof compete pelo GVL com a aplicação (~3% overhead no modo
# :wall, sample_rate 1_000). Aceitável para o objetivo pedagógico e
# documentado no relatório.

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))
require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/promises'
require 'idw/async_scope'
require 'idw/partitioned_ractor'

DATASET  = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
SCENARIO = ENV.fetch('SCENARIO', 'PROMISES')

XQ = IDW::Config::QUERY_LONGITUDE
YQ = IDW::Config::QUERY_LATITUDE

def cfg(name, compute_tt)
  IDW::ExecutionConfig.new(
    name: name,
    io_thread_type: :virtual,
    io_threads: IDW::Config::IO_THREADS,
    compute_thread_type: compute_tt,
    compute_threads: IDW::Config::COMPUTE_THREADS,
    sync_type: :none,
    chunk_size: IDW::Config::CHUNK_SIZE
  )
end

RUNNERS = {
  'PROMISES' => -> {
    IDW::Promises.new.execute_full_process(DATASET, XQ, YQ, cfg('PROMISES', :platform))
  },
  'ASYNC_SCOPE' => -> {
    IDW::AsyncScope.new.execute_full_process(DATASET, XQ, YQ, cfg('ASYNC_SCOPE', :platform))
  },
  'PARTITIONED_RACTOR' => -> {
    config = cfg('PARTITIONED_RACTOR', :platform)
    dataset = IDW::CsvReader.new.read(DATASET, config)
    IDW::PartitionedRactor.new.execute_computation(dataset, XQ, YQ, config)
  }
}.freeze

runner = RUNNERS[SCENARIO] or abort "SCENARIO inválido: #{SCENARIO}. Opções: #{RUNNERS.keys.join(', ')}"

profile_dump = nil
if ENV['PROFILE'] == '1'
  require 'stackprof'
  profile_dir = File.expand_path('profiles', __dir__)
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
