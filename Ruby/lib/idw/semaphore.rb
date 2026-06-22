# frozen_string_literal: true

require 'concurrent'

require_relative 'concurrent_base'
require_relative 'config'

module IDW
  # Cenário SEMAPHORE — espelha Java/.../core/IDWSemaphoreImpl.java.
  #
  # `Concurrent::Semaphore` (gem `concurrent-ruby`) controla quantas threads
  # podem entrar simultaneamente na seção crítica; um `Mutex` interno preserva
  # a atomicidade do par (num, den). Default de permits = metade de
  # COMPUTE_THREADS (mínimo 1), igual ao Java.
  #
  # Comportamento esperado:
  #   - permits = 1  → equivale ao MUTEX puro;
  #   - permits = N  → todas as threads podem disputar, mas o lock interno
  #                    ainda garante correção.
  class Semaphore < ConcurrentBase
    def initialize(permits = nil)
      super()
      permits ||= [Config::COMPUTE_THREADS / 2, 1].max
      @permits = ::Concurrent::Semaphore.new(permits)
      @lock    = ::Mutex.new
    end

    def reset
      @num = 0.0
      @den = 0.0
    end

    def contribute(weighted_value, weight)
      @permits.acquire
      begin
        @lock.synchronize do
          @num += weighted_value
          @den += weight
        end
      ensure
        @permits.release
      end
    end

    def final_result
      @num / @den
    end
  end
end
