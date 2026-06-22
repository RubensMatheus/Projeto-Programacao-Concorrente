# frozen_string_literal: true

require_relative 'config'
require_relative 'csv_reader'

module IDW
  # Cenário 0 — baseline serial. Espelha Java/.../core/IDWSerialImpl.java.
  # É a REFERÊNCIA NUMÉRICA contra a qual os cenários paralelos serão
  # validados (MUTEX, SEMAPHORE, ATOMIC, PC devem bater até epsilon de FP).
  class Serial
    def initialize
      @reader = CsvReader.new
    end

    # Lê o CSV e calcula o IDW serialmente.
    #
    # @param dataset_path [String]
    # @param xq [Float] longitude do ponto de consulta
    # @param yq [Float] latitude do ponto de consulta
    # @param config [IDW::ExecutionConfig, nil]
    # @return [Float] valor IDW interpolado
    def execute_full_process(dataset_path, xq, yq, config = nil)
      dataset = @reader.read(dataset_path, config)
      execute_computation(dataset, xq, yq)
    end

    # Calcula o IDW sobre um dataset já em memória.
    #
    # @param dataset [IDW::DataSet]
    # @param xq [Float]
    # @param yq [Float]
    # @return [Float]
    def execute_computation(dataset, xq, yq)
      lats = dataset.latitudes
      lons = dataset.longitudes
      vals = dataset.values
      n    = lats.length

      num = 0.0
      den = 0.0
      s   = 0
      while s < n
        d = haversine(lons[s], lats[s], xq, yq)
        if d != 0.0
          w = 1.0 / (d * d)
          num += w * vals[s]
          den += w
        end
        s += 1
      end

      num / den
    end

    private

    # Distância geodésica em km. Constantes idênticas às do Java.
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
