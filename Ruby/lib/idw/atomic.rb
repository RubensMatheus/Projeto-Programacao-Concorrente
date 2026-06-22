# frozen_string_literal: true

require_relative 'concurrent_base'
require_relative 'executor_factory'

module IDW
  # Cenário ATOMIC — espelha Java/.../core/IDWAtomicImpl.java.
  #
  # Sem `DoubleAdder` no MRI. A estratégia idiomática (e a que mais se
  # aproxima do que o `DoubleAdder` faz internamente — *striping* por
  # thread + soma final) é **redução local + agregação no fim**:
  #   - cada worker mantém parciais (num_local, den_local) em variáveis
  #     próprias do frame da partição → sem contenção alguma durante o loop;
  #   - ao terminar, soma uma única vez nos acumuladores globais sob um
  #     mutex curto (uma chamada por worker, não por sensor).
  #
  # Isso reescreve `execute_computation` para que cada worker rode o loop
  # localmente, ignorando `contribute()`. A semântica de "atomicidade na
  # agregação" é preservada e a contenção desaparece — exatamente o
  # benefício do `DoubleAdder` (acumulação lock-free distribuída).
  class Atomic < ConcurrentBase
    def execute_computation(dataset, xq, yq, config)
      reset

      n       = dataset.latitudes.length
      threads = [config.compute_threads, 1].max
      chunk   = ((n + threads - 1) / threads)
      merge   = ::Mutex.new

      ExecutorFactory.run_parallel(config.compute_thread_type, threads) do |t|
        start_idx = t * chunk
        end_idx   = [start_idx + chunk, n].min
        next if start_idx >= end_idx

        num_local, den_local = partition_sum(dataset, xq, yq, start_idx, end_idx)

        merge.synchronize do
          @num += num_local
          @den += den_local
        end
      end

      final_result
    end

    def reset
      @num = 0.0
      @den = 0.0
    end

    def final_result
      @num / @den
    end

    private

    # Soma local da partição — equivalente a uma "célula" do DoubleAdder.
    # Não chama `contribute()` para evitar tráfego pelo mutex de agregação.
    def partition_sum(dataset, xq, yq, start_idx, end_idx)
      lats = dataset.latitudes
      lons = dataset.longitudes
      vals = dataset.values

      num_local = 0.0
      den_local = 0.0
      s         = start_idx
      while s < end_idx
        d = haversine(lons[s], lats[s], xq, yq)
        if d != 0.0
          w = 1.0 / (d * d)
          num_local += w * vals[s]
          den_local += w
        end
        s += 1
      end
      [num_local, den_local]
    end

    # haversine herdada de ConcurrentBase é privada; reimplementa local
    # com mesmas constantes (evita acoplamento à visibilidade da base).
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
