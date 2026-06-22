# frozen_string_literal: true

$LOAD_PATH.unshift(File.expand_path('../lib', __dir__))
require 'idw/config'
require 'idw/execution_config'
require 'idw/csv_reader'
require 'idw/serial'
require 'idw/mutex'

module IDW
  # Executa apenas os cenários SERIAL e MUTEX e reporta o tempo total
  # gasto em cada um (wall-clock, via CLOCK_MONOTONIC).
  class SerialMutexRunner
    DATASET = ENV['DATASET'] || IDW::Config::DEFAULT_DATASET_PATH
    XQ = IDW::Config::QUERY_LONGITUDE
    YQ = IDW::Config::QUERY_LATITUDE

    def run
      serial_result = time('SERIAL') do
        cfg = IDW::ExecutionConfig.new(
          name: 'SERIAL',
          io_thread_type: :platform, io_threads: IDW::Config::IO_THREADS,
          compute_thread_type: :platform, compute_threads: 1,
          sync_type: :none, chunk_size: IDW::Config::CHUNK_SIZE
        )
        IDW::Serial.new.execute_full_process(DATASET, XQ, YQ, cfg)
      end

      mutex_result = time('MUTEX') do
        cfg = IDW::ExecutionConfig.new(
          name: 'MUTEX',
          io_thread_type: :virtual, io_threads: IDW::Config::IO_THREADS,
          compute_thread_type: :platform, compute_threads: IDW::Config::COMPUTE_THREADS,
          sync_type: :mutex, chunk_size: IDW::Config::CHUNK_SIZE
        )
        IDW::Mutex.new.execute_full_process(DATASET, XQ, YQ, cfg)
      end

      [serial_result, mutex_result]
    end

    private

    def time(label)
      t0 = Process.clock_gettime(Process::CLOCK_MONOTONIC)
      val = yield
      dt = Process.clock_gettime(Process::CLOCK_MONOTONIC) - t0
      puts format('scenario=%-6s idw=%.15f elapsed=%.3fs', label, val, dt)
      { scenario: label, idw: val, elapsed: dt }
    end
  end
end

IDW::SerialMutexRunner.new.run if $PROGRAM_NAME == __FILE__
