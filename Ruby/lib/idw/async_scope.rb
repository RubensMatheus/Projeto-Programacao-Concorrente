# frozen_string_literal: true

require 'async'
require_relative 'csv_reader'
require_relative 'etapa2_kernel'

module IDW
  # Cenário #13 (Etapa 2): concorrência estruturada. Análogo de
  # Java/.../core/IDWStructuredConcurrencyImpl.java (`StructuredTaskScope`).
  #
  # Usa `Sync do |parent| ... parent.async { ... } ...`. O contrato
  # estrutural é o mesmo do StructuredTaskScope:
  #   - O bloco só retorna após todas as subtarefas terminarem.
  #   - Uma exceção em qualquer subtarefa propaga para o parent, cancelando
  #     as irmãs (ciclo de vida hierárquico com cancelamento).
  #
  # Divergência com o Java: `async` é baseado em Fibers cooperativas em uma
  # única thread; código CPU-bound puro dentro de `parent.async` não
  # paraleliza. Para preservar a política padrão "cálculo em threads
  # nativas", cada subtarefa fiber dispara uma Thread nativa e espera
  # `Thread#value`. O fiber apenas orquestra; o trabalho pesado roda em
  # threads. O contrato estrutural continua íntegro (cancelamento chega
  # até o fiber; interromper o thread exige checagem cooperativa, aqui
  # trivial porque partições são curtas).
  class AsyncScope
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

      partials = Array.new(threads)

      Sync do |parent|
        threads.times do |t|
          parent.async do
            start_idx = t * chunk
            end_idx   = [start_idx + chunk, n].min
            partials[t] =
              if start_idx >= end_idx
                [0.0, 0.0]
              else
                worker = Thread.new do
                  Etapa2Kernel.compute_partial(dataset, xq, yq, start_idx, end_idx)
                end
                worker.value
              end
          end
        end
      end

      num = 0.0
      den = 0.0
      partials.each do |(pn, pd)|
        num += pn
        den += pd
      end
      num / den
    end
  end
end
