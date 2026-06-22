# frozen_string_literal: true

module IDW
  # Configuração imutável de um cenário — espelha Java/.../config/ExecutionConfig.java.
  #
  # @!attribute [r] name
  # @!attribute [r] io_thread_type    :platform | :virtual
  # @!attribute [r] io_threads
  # @!attribute [r] compute_thread_type :platform | :virtual
  # @!attribute [r] compute_threads
  # @!attribute [r] sync_type         :none | :mutex | :semaphore | :volatile | :atomic | :producer_consumer
  # @!attribute [r] chunk_size
  ExecutionConfig = Data.define(
    :name,
    :io_thread_type,
    :io_threads,
    :compute_thread_type,
    :compute_threads,
    :sync_type,
    :chunk_size
  )
end
