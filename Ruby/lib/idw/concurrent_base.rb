# frozen_string_literal: true

require_relative 'config'
require_relative 'csv_reader'
require_relative 'executor_factory'

module IDW
  # Base abstrata das implementações concorrentes — espelha
  # Java/.../core/IDWConcurrentBase.java.
  #
  # Particiona o dataset entre `config.compute_threads` workers; cada worker
  # calcula peso `w = 1/d²` por sensor (Haversine) e chama `contribute(w*z, w)`.
  # A subclass decide como acumular `num`/`den` (sem proteção, mutex, atomic
  # etc.) — esse é o ponto onde os cenários divergem.
  class ConcurrentBase
    def initialize
      @reader = CsvReader.new
    end

    # Pipeline completo: leitura + cálculo.
    def execute_full_process(dataset_path, xq, yq, config)
      dataset = @reader.read(dataset_path, config)
      execute_computation(dataset, xq, yq, config)
    end

    # Apenas a fase de cálculo (assume dataset em memória).
    def execute_computation(dataset, xq, yq, config)
      reset

      n       = dataset.latitudes.length
      threads = [config.compute_threads, 1].max
      chunk   = ((n + threads - 1) / threads)

      ExecutorFactory.run_parallel(config.compute_thread_type, threads) do |t|
        start_idx = t * chunk
        end_idx   = [start_idx + chunk, n].min
        next if start_idx >= end_idx

        process_partition(dataset, xq, yq, start_idx, end_idx)
      end

      final_result
    end

    protected

    # Loop interno do worker — idêntico em estrutura ao Java.
    def process_partition(dataset, xq, yq, start_idx, end_idx)
      lats = dataset.latitudes
      lons = dataset.longitudes
      vals = dataset.values

      s = start_idx
      while s < end_idx
        d = haversine(lons[s], lats[s], xq, yq)
        if d != 0.0
          w = 1.0 / (d * d)
          contribute(w * vals[s], w)
        end
        s += 1
      end
    end

    # Hooks de subclasse — cada cenário implementa.
    def reset;                              raise NotImplementedError; end
    def contribute(_weighted_value, _weight); raise NotImplementedError; end
    def final_result;                       raise NotImplementedError; end

    private

    def haversine(lon1, lat1, lon2, lat2)
      r    = Config::EARTH_RADIUS_KM
      rad  = Config::RADIAN
      dlon = (lon2 - lon1) * rad
      dlat = (lat2 - lat1) * rad

      sin_dlat_2 = Math.sin(dlat / 2)
      sin_dlon_2 = Math.sin(dlon / 2)

      a = (sin_dlat_2 * sin_dlat_2) +
          Math.cos(lat1 * rad) * Math.cos(lat2 * rad) *
          (sin_dlon_2 * sin_dlon_2)

      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      r * c
    end
  end
end
