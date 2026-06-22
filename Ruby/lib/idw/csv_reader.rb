# frozen_string_literal: true

require_relative 'data_set'
require_relative 'executor_factory'

module IDW
  # Leitor paralelo de CSV de sensores — espelha
  # Java/.../io/CsvDatasetReader.java.
  #
  # Estratégia idêntica à do Java: duas passadas.
  #   (1) Conta linhas (sequencial) → pré-aloca arrays.
  #   (2) Distribui intervalos `[lineStart, lineEnd)` entre `io_threads`
  #       workers; cada worker reabre o arquivo, pula até o início do seu
  #       range e parseia direto para os arrays destino.
  #
  # Sob MRI, IO bloqueante (`read`/`gets`) LIBERA o GVL, então a fase IO
  # tende a escalar com mais threads — esse é o eixo em que o lado Ruby
  # mostra ganho real (ao contrário da fase compute, que fica presa ao GVL).
  class CsvReader
    # @param path [String] caminho do CSV
    # @param config [IDW::ExecutionConfig, nil] usa `io_thread_type` e `io_threads`
    # @return [IDW::DataSet]
    def read(path, config = nil)
      return read_sequential(path) if config.nil? || config.io_threads <= 1

      line_count = count_data_lines(path)
      threads    = config.io_threads
      chunk      = ((line_count + threads - 1) / threads)

      latitudes  = Array.new(line_count)
      longitudes = Array.new(line_count)
      values     = Array.new(line_count)

      ExecutorFactory.run_parallel(config.io_thread_type, threads) do |t|
        line_start = t * chunk
        line_end   = [line_start + chunk, line_count].min
        next if line_start >= line_end

        parse_range(path, latitudes, longitudes, values, line_start, line_end)
      end

      DataSet.new(latitudes: latitudes, longitudes: longitudes, values: values)
    end

    private

    # Conta linhas não vazias — passada única sequencial. Espelha
    # `countDataLines` do Java.
    def count_data_lines(path)
      count = 0
      File.foreach(path) { |line| count += 1 unless line.strip.empty? }
      count
    end

    # Parseia o intervalo [line_start, line_end) direto nos arrays destino.
    def parse_range(path, lats, lons, vals, line_start, line_end)
      File.open(path, 'r') do |io|
        skip = 0
        while skip < line_start
          io.gets
          skip += 1
        end

        idx = line_start
        while idx < line_end && (line = io.gets)
          next if line.strip.empty?

          c1 = line.index(',')
          c2 = line.index(',', c1 + 1)
          lats[idx] = line.byteslice(0, c1).to_f
          lons[idx] = line.byteslice(c1 + 1, c2 - c1 - 1).to_f
          vals[idx] = line.byteslice(c2 + 1, line.length - c2 - 1).to_f
          idx += 1
        end
      end
    end

    # Fallback usado pela Fase 1 (config nulo / 1 thread).
    def read_sequential(path)
      latitudes  = []
      longitudes = []
      values     = []

      File.foreach(path) do |line|
        next if line.strip.empty?

        c1 = line.index(',')
        c2 = line.index(',', c1 + 1)
        latitudes  << line.byteslice(0, c1).to_f
        longitudes << line.byteslice(c1 + 1, c2 - c1 - 1).to_f
        values     << line.byteslice(c2 + 1, line.length - c2 - 1).to_f
      end

      DataSet.new(latitudes: latitudes, longitudes: longitudes, values: values)
    end
  end
end
