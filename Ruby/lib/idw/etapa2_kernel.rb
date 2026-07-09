# frozen_string_literal: true

require_relative 'config'

module IDW
  # Kernel compartilhado pelas implementações da Etapa 2. Extraído para
  # evitar duplicação de haversine + laço interno entre cinco arquivos.
  # As implementações da Etapa 1 continuam com sua cópia própria em
  # ConcurrentBase; não mexemos naquele código porque os resultados já
  # foram coletados.
  module Etapa2Kernel
    module_function

    # Percorre [start_idx, end_idx) do dataset e retorna [num, den] parciais.
    def compute_partial(dataset, xq, yq, start_idx, end_idx)
      lats = dataset.latitudes
      lons = dataset.longitudes
      vals = dataset.values

      num = 0.0
      den = 0.0
      s   = start_idx
      while s < end_idx
        d = haversine(lons[s], lats[s], xq, yq)
        if d != 0.0
          w = 1.0 / (d * d)
          num += w * vals[s]
          den += w
        end
        s += 1
      end

      [num, den]
    end

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
