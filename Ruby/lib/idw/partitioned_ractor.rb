# frozen_string_literal: true

require_relative 'config'

module IDW
  # Particionamento estático via Ractors. Cada Ractor abre o CSV, pula até seu
  # range e parseia apenas as linhas dele: passar o dataset pronto do main
  # exigiria cópia por mensagem (Ractors não compartilham memória), então é
  # mais barato deixar o IO acontecer dentro de cada Ractor. Chunks fixos, sem
  # work-stealing. Paralelismo real de CPU em processo único, sem GVL entre
  # Ractors.
  class PartitionedRactor
    def initialize
      Warning[:experimental] = false if Warning.respond_to?(:[]=)
    end

    def execute_full_process(dataset_path, xq, yq, config)
      ractors = [config.compute_threads, 1].max
      line_count = count_data_lines(dataset_path)
      chunk = ((line_count + ractors - 1) / ractors)

      workers = Array.new(ractors) do |t|
        line_start = t * chunk
        line_end   = [line_start + chunk, line_count].min

        Ractor.new(dataset_path, line_start, line_end, xq, yq) do |path, l0, l1, x, y|
          # Constantes redefinidas localmente porque Ractors isolados não
          # capturam constantes não-shareable do escopo léxico.
          earth_radius_km = 6378.1
          rad             = Math::PI / 180.0

          num = 0.0
          den = 0.0
          next [num, den] if l0 >= l1

          File.open(path, 'r') do |io|
            skip = 0
            while skip < l0
              io.gets
              skip += 1
            end

            idx = l0
            while idx < l1 && (line = io.gets)
              next if line.strip.empty?

              c1  = line.index(',')
              c2  = line.index(',', c1 + 1)
              lat = line.byteslice(0, c1).to_f
              lon = line.byteslice(c1 + 1, c2 - c1 - 1).to_f
              val = line.byteslice(c2 + 1, line.length - c2 - 1).to_f

              dlon = (x - lon) * rad
              dlat = (y - lat) * rad
              sdla = Math.sin(dlat / 2)
              sdlo = Math.sin(dlon / 2)
              a    = (sdla * sdla) + Math.cos(lat * rad) * Math.cos(y * rad) * (sdlo * sdlo)
              c    = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
              d    = earth_radius_km * c

              if d != 0.0
                w = 1.0 / (d * d)
                num += w * val
                den += w
              end

              idx += 1
            end
          end

          [num, den]
        end
      end

      num = 0.0
      den = 0.0
      workers.each do |r|
        pn, pd = r.take
        num += pn
        den += pd
      end

      num / den
    end

    # Existe só para satisfazer o contrato das outras impls quando um DataSet
    # já está em memória; re-serializa o dataset via message passing, o que é
    # caro. Prefira sempre `execute_full_process`.
    def execute_computation(dataset, xq, yq, config)
      ractors = [config.compute_threads, 1].max
      n = dataset.latitudes.length
      chunk = ((n + ractors - 1) / ractors)

      workers = Array.new(ractors) do |t|
        s0 = t * chunk
        s1 = [s0 + chunk, n].min
        lats_slice = dataset.latitudes[s0...s1].freeze
        lons_slice = dataset.longitudes[s0...s1].freeze
        vals_slice = dataset.values[s0...s1].freeze

        Ractor.new(lats_slice, lons_slice, vals_slice, xq, yq) do |lats, lons, vals, x, y|
          earth_radius_km = 6378.1
          rad             = Math::PI / 180.0

          num = 0.0
          den = 0.0
          i   = 0
          sz  = lats.length
          while i < sz
            lon = lons[i]
            lat = lats[i]
            dlon = (x - lon) * rad
            dlat = (y - lat) * rad
            sdla = Math.sin(dlat / 2)
            sdlo = Math.sin(dlon / 2)
            a    = (sdla * sdla) + Math.cos(lat * rad) * Math.cos(y * rad) * (sdlo * sdlo)
            c    = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            d    = earth_radius_km * c

            if d != 0.0
              w = 1.0 / (d * d)
              num += w * vals[i]
              den += w
            end

            i += 1
          end

          [num, den]
        end
      end

      num = 0.0
      den = 0.0
      workers.each do |r|
        pn, pd = r.take
        num += pn
        den += pd
      end

      num / den
    end

    private

    def count_data_lines(path)
      count = 0
      File.foreach(path) { |line| count += 1 unless line.strip.empty? }
      count
    end
  end
end
