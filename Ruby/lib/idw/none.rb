# frozen_string_literal: true

require_relative 'concurrent_base'

module IDW
  # Cenário NONE — sem qualquer sincronização. Espelha
  # Java/.../core/IDWNoneImpl.java.
  #
  # Nota MRI/GVL: `num += w*z` é um RMW logicamente não-atômico, mas o GVL
  # serializa bytecode, então a race tende a ser MASCARADA — não eliminada.
  # Em JRuby/TruffleRuby (sem GVL) a divergência apareceria com facilidade.
  # Para forçar evidência empírica seria preciso inserir yield points
  # (Thread.pass / sleep) entre leitura e escrita, o que é gambiarra
  # didática e está fora do escopo desta fase.
  class None < ConcurrentBase
    def reset
      @num = 0.0
      @den = 0.0
    end

    def contribute(weighted_value, weight)
      @num += weighted_value
      @den += weight
    end

    def final_result
      @num / @den
    end
  end
end
