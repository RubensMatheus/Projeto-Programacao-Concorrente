# frozen_string_literal: true

require_relative 'concurrent_base'

module IDW
  # Cenário MUTEX — espelha Java/.../core/IDWMutexImpl.java.
  #
  # `Mutex#synchronize` cobre o RMW do par (num, den), garantindo IDW final
  # bit-a-bit equivalente ao serial (até epsilon de FP). Em MRI o lock é
  # redundante com o GVL para integridade de bytecode, mas:
  #   - documenta o intent (memory safety semântica);
  #   - sob JRuby/TruffleRuby (sem GVL) ele se torna estritamente necessário;
  #   - serializa contribuições, então throughput tende a degradar com mais
  #     threads — exatamente o contraste pedagógico com ATOMIC.
  class Mutex < ConcurrentBase
    def initialize
      super
      @lock = ::Mutex.new
    end

    def reset
      @num = 0.0
      @den = 0.0
    end

    def contribute(weighted_value, weight)
      @lock.synchronize do
        @num += weighted_value
        @den += weight
      end
    end

    def final_result
      @num / @den
    end
  end
end
