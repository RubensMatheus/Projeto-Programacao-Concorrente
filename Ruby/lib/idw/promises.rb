# frozen_string_literal: true

require 'concurrent'
require_relative 'csv_reader'
require_relative 'etapa2_kernel'

module IDW
  # Cenário #12 (Etapa 2): pipeline assíncrono composicional. Análogo de
  # Java/.../core/IDWCompletableFutureImpl.java (`CompletableFuture` +
  # `thenCombine`/`allOf`).
  #
  # Cada partição vira um `Concurrent::Promises.future_on(pool)`; a
  # composição é feita com `zip(*futures).then { |*partials| ... }`, que
  # espelha o `allOf(...).thenApply(...)` do Java. O pool é um
  # `Concurrent::FixedThreadPool` (threads nativas), então sob GVL o
  # cálculo CPU-bound serializa. O achado pedagógico é a API de composição,
  # não o speedup.
  #
  # Política de threads:
  #   IO: Fibers (via CsvReader com io_thread_type=:virtual).
  #   Cálculo: Threads nativas via FixedThreadPool.
  class Promises
    def initialize
      @reader = CsvReader.new
    end

    def execute_full_process(dataset_path, xq, yq, config)
      dataset = @reader.read(dataset_path, config)
      execute_computation(dataset, xq, yq, config)
    end

    def execute_computation(dataset, xq, yq, config)
      n       = dataset.latitudes.length
      threads = [config.compute_threads, 1].max
      chunk   = ((n + threads - 1) / threads)

      pool = Concurrent::FixedThreadPool.new(threads)
      begin
        futures = Array.new(threads) do |t|
          start_idx = t * chunk
          end_idx   = [start_idx + chunk, n].min
          Concurrent::Promises.future_on(pool) do
            if start_idx >= end_idx
              [0.0, 0.0]
            else
              Etapa2Kernel.compute_partial(dataset, xq, yq, start_idx, end_idx)
            end
          end
        end

        reduced = Concurrent::Promises.zip(*futures).then do |*partials|
          num = 0.0
          den = 0.0
          partials.each do |(pn, pd)|
            num += pn
            den += pd
          end
          num / den
        end

        reduced.value!
      ensure
        pool.shutdown
        pool.wait_for_termination
      end
    end
  end
end
