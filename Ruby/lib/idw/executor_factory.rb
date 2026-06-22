# frozen_string_literal: true

require 'async'

module IDW
  # Equivalente conceitual de Java/.../utils/ExecutorFactory.java.
  #
  # Diferentemente do Java (que retorna um `ExecutorService` ao qual se
  # submetem `Runnable`s), aqui expomos uma API funcional:
  # `run_parallel(thread_type, n) { |i| ... }`. Razão: o uso real no projeto
  # é sempre "spawnar N tarefas e esperar todas terminarem" — não
  # precisamos do conceito de pool reutilizável.
  #
  # Mapeamento:
  #   :platform → 1 `Thread` nativa por tarefa (pthread, mas presa ao GVL
  #               na fase compute; libera o GVL em I/O bloqueante).
  #   :virtual  → 1 Fiber cooperativa por tarefa, via gem `async`.
  #               Equivalente conceitual das Virtual Threads (Loom).
  #               Lembrete: Fibers não dão paralelismo em código CPU-bound
  #               sob MRI/GVL — esse é exatamente o ponto pedagógico.
  module ExecutorFactory
    module_function

    # Executa `n` tarefas em paralelo (cada uma recebe o índice da partição).
    #
    # @param thread_type [Symbol] :platform ou :virtual
    # @param n [Integer] número de tarefas (== número de partições)
    # @yield [Integer] índice da tarefa (0..n-1)
    # @return [void]
    def run_parallel(thread_type, n)
      case thread_type
      when :platform
        threads = Array.new(n) { |i| Thread.new { yield i } }
        threads.each(&:join)
      when :virtual
        Sync do |parent|
          tasks = Array.new(n) { |i| parent.async { yield i } }
          tasks.each(&:wait)
        end
      else
        raise ArgumentError, "thread_type desconhecido: #{thread_type.inspect}"
      end
    end
  end
end
