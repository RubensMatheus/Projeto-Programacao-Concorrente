# frozen_string_literal: true

require 'async'
require_relative 'config'
require_relative 'csv_reader'

module IDW
  # Cenário 9 — Produtor-Consumidor — espelha
  # Java/.../core/IDWProducerConsumerImpl.java.
  #
  # 1 produtor (tipo `io_thread_type`) particiona o dataset em ranges
  # `[start, end)` de tamanho `chunk_size` e os enfileira numa `SizedQueue`
  # com capacidade `num_consumers * 4` (idêntico ao Java). N consumidores
  # (tipo `compute_thread_type`) consomem ranges, acumulam parciais
  # locais e mesclam ao final sob um `Mutex` curto (equivalente ao
  # `DoubleAdder` do lado Java — reduz contenção a uma agregação por
  # consumidor, não uma por sensor).
  #
  # Sincronização entre produtor e consumidores é IMPLÍCITA na
  # `SizedQueue` (Thread::SizedQueue), o equivalente exato da
  # `LinkedBlockingQueue` do Java: bloqueia em `push` quando cheia e em
  # `pop` quando vazia. Encerramento via N poison pills (uma por
  # consumidor) — sem isso, deadlock latente.
  POISON_PILL = Object.new.freeze

  class ProducerConsumer
    def initialize
      @reader = CsvReader.new
    end

    # Pipeline completo (IO + PC).
    def execute_full_process(dataset_path, xq, yq, config)
      dataset = @reader.read(dataset_path, config)
      execute(dataset, xq, yq, config)
    end

    # Apenas o estágio PC (assume dataset já em memória).
    def execute(dataset, xq, yq, config)
      num_consumers = [config.compute_threads, 1].max
      range_size    = [config.chunk_size, 1].max
      n             = dataset.latitudes.length

      queue      = SizedQueue.new(num_consumers * 4)
      merge_lock = ::Mutex.new
      @num       = 0.0
      @den       = 0.0

      consumers = spawn_consumers(num_consumers, config.compute_thread_type,
                                  dataset, xq, yq, queue, merge_lock)
      producer  = spawn_producer(config.io_thread_type, queue, n, range_size, num_consumers)

      join(producer)
      consumers.each { |c| join(c) }

      @num / @den
    end

    private

    def spawn_consumers(num_consumers, thread_type, dataset, xq, yq, queue, merge_lock)
      task = consumer_task(dataset, xq, yq, queue, merge_lock)
      case thread_type
      when :platform
        Array.new(num_consumers) { Thread.new(&task) }
      when :virtual
        Array.new(num_consumers) { Async { task.call } }
      else
        raise ArgumentError, "compute_thread_type inválido: #{thread_type.inspect}"
      end
    end

    def spawn_producer(thread_type, queue, n, range_size, num_consumers)
      task = producer_task(queue, n, range_size, num_consumers)
      case thread_type
      when :platform then Thread.new(&task)
      when :virtual  then Async { task.call }
      else raise ArgumentError, "io_thread_type inválido: #{thread_type.inspect}"
      end
    end

    def join(thread_or_task)
      thread_or_task.respond_to?(:wait) ? thread_or_task.wait : thread_or_task.join
    end

    def consumer_task(dataset, xq, yq, queue, merge_lock)
      lats = dataset.latitudes
      lons = dataset.longitudes
      vals = dataset.values

      lambda do
        local_num = 0.0
        local_den = 0.0
        loop do
          range = queue.pop
          break if range.equal?(POISON_PILL)

          s = range[0]
          stop = range[1]
          while s < stop
            d = haversine(lons[s], lats[s], xq, yq)
            if d != 0.0
              w = 1.0 / (d * d)
              local_num += w * vals[s]
              local_den += w
            end
            s += 1
          end
        end

        merge_lock.synchronize do
          @num += local_num
          @den += local_den
        end
      end
    end

    def producer_task(queue, n, range_size, num_consumers)
      lambda do
        start = 0
        while start < n
          stop = [start + range_size, n].min
          queue.push([start, stop])
          start = stop
        end
        num_consumers.times { queue.push(POISON_PILL) }
      end
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
