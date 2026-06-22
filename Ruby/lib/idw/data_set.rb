# frozen_string_literal: true

module IDW
  # Conjunto de sensores em memória — três arrays paralelos de Float.
  # Espelha Java/.../model/DataSet.java. No MRI não há `double[]` nativo; o
  # tipo Array de Float carrega overhead de boxing, mas mantém a estrutura
  # de acesso por índice idêntica ao lado Java.
  #
  # @!attribute [r] latitudes  Array<Float>
  # @!attribute [r] longitudes Array<Float>
  # @!attribute [r] values     Array<Float>
  DataSet = Data.define(:latitudes, :longitudes, :values) do
    def size
      latitudes.length
    end
  end
end
