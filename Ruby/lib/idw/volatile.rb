# frozen_string_literal: true

require_relative 'concurrent_base'

module IDW
  # Cenário "VOLATILE" — espelha Java/.../core/IDWVolatileImpl.java APENAS
  # como rótulo. Ruby **não tem `volatile`** e o MRI não expõe nada
  # equivalente ao Java Memory Model.
  #
  # Discussão (relatório):
  #   - No Java, `volatile` resolve VISIBILIDADE entre threads (publicação
  #     segura de num/den/computationDone) MAS *não* resolve RMW: `num +=`
  #     continua sendo (read, add, write) não atômico → lost update.
  #   - No MRI/Ruby, o GVL já força ordem global de leituras/escritas de
  #     variáveis de instância em bytecode (sem reordering observável entre
  #     threads que disputam o GVL), tornando `volatile` desnecessário para
  #     visibilidade — e, ao mesmo tempo, igualmente impotente contra a race
  #     do RMW (que persiste logicamente, mesmo que o GVL a mascare).
  #   - Por isso este cenário é, **na prática, idêntico ao NONE**. O valor
  #     pedagógico está na discussão, não no código: provar a race do
  #     `volatile` exigiria yield points artificiais ou JRuby/TruffleRuby.
  #
  # Implementação: cópia funcional do NONE com docstring explicitando o
  # caso teórico. Não simular race manualmente (vide INSTRUCOES §3.4).
  class Volatile < ConcurrentBase
    # Flag análoga ao `volatile boolean computationDone` do Java — caso
    # canônico de uso CORRETO de `volatile` (publicação de término).
    # Em MRI a publicação é trivialmente garantida pelo GVL.
    attr_reader :computation_done

    def reset
      @num = 0.0
      @den = 0.0
      @computation_done = false
    end

    def contribute(weighted_value, weight)
      @num += weighted_value
      @den += weight
    end

    def final_result
      @computation_done = true
      @num / @den
    end
  end
end
