# frozen_string_literal: true

module IDW
  # Constantes globais — espelham Java/.../config/BenchmarkConfig.java.
  module Config
    # Ponto de consulta fixo (Estratégia E). 7ª casa decimal `5` impede
    # colisão com sensores gravados com 6 casas (distância = 0 no IDW).
    QUERY_LONGITUDE = -35.2110235
    QUERY_LATITUDE  = -5.7945675

    # Mesmo valor do lado Java: 10 = nº de cores físicos do MacBook Air M4
    # (4P + 6E), sem oversubscription. Mantido no Ruby para comparabilidade
    # direta da tabela de cenários (sob GVL a fase compute não escala com
    # mais threads, então o valor exato é pouco sensível neste lado).
    COMPUTE_THREADS = 10
    IO_THREADS      = 2
    CHUNK_SIZE      = 20

    # Constantes da fórmula de Haversine — idênticas às do Java.
    EARTH_RADIUS_KM = 6378.1
    RADIAN          = Math::PI / 180.0

    # Caminho default do dataset compartilhado (relativo à raiz Ruby/).
    DEFAULT_DATASET_PATH = File.expand_path('../../../datasets/sensores.csv', __dir__)
  end
end
