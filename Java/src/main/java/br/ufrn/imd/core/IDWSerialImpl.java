package br.ufrn.imd.core;

import br.ufrn.imd.config.ExecutionConfig;
import br.ufrn.imd.io.CsvDatasetReader;
import br.ufrn.imd.model.DataSet;

import java.nio.file.Path;

/**
 * Cenário 0 — baseline serial (single-thread).
 *
 * Calcula o IDW de um único ponto varrendo todo o dataset em sequência, sem
 * qualquer mecanismo de concorrência. Serve de REFERÊNCIA NUMÉRICA para
 * verificar a correção dos cenários paralelos: MUTEX, SEMAPHORE e ATOMIC
 * devem bater com esse valor (até epsilon de FP); NONE e VOLATILE tendem a
 * divergir, demonstrando suas falhas.
 *
 * Como não usa executor, ignora ThreadType/SyncType da config — só usa a
 * parte de IO para a leitura do CSV.
 */
public class IDWSerialImpl {

    private static final double EARTH_RADIUS = 6378.1;
    private static final double RADIAN = Math.PI / 180;

    private final CsvDatasetReader reader = new CsvDatasetReader();

    /**
     * Lê o CSV e calcula o IDW serialmente, sem threads.
     *
     * @param datasetPath caminho do {@code sensores.csv}
     * @param xq          longitude do ponto de consulta
     * @param yq          latitude do ponto de consulta
     * @param config      usado apenas para configurar a leitura do CSV
     * @return            valor IDW interpolado (referência numérica)
     * @throws Exception  se a leitura falhar
     */
    public double executeFullProcess(
            Path datasetPath,
            double xq,
            double yq,
            ExecutionConfig config
    ) throws Exception {
        DataSet dataSet = reader.read(datasetPath, config);
        return executeComputation(dataSet, xq, yq);
    }

    /**
     * Calcula o IDW serial sobre um dataset já em memória.
     *
     * @param dataSet sensores
     * @param xq      longitude do ponto de consulta
     * @param yq      latitude do ponto de consulta
     * @return        valor IDW interpolado
     */
    public double executeComputation(DataSet dataSet, double xq, double yq) {
        double[] lats = dataSet.latitudes();
        double[] lons = dataSet.longitudes();
        double[] vals = dataSet.values();

        double num = 0.0;
        double den = 0.0;

        for (int s = 0; s < lats.length; s++) {
            double d = haversine(lons[s], lats[s], xq, yq);
            if (d == 0.0) continue;
            double w = 1.0 / (d * d);
            num += w * vals[s];
            den += w;
        }

        return num / den;
    }

    /**
     * Distância geodésica em km entre dois pontos pela fórmula de Haversine.
     *
     * @param lon1 longitude do ponto 1 (graus)
     * @param lat1 latitude do ponto 1 (graus)
     * @param lon2 longitude do ponto 2 (graus)
     * @param lat2 latitude do ponto 2 (graus)
     * @return distância em km
     */
    private static double haversine(double lon1, double lat1, double lon2, double lat2) {
        double dlon = (lon2 - lon1) * RADIAN;
        double dlat = (lat2 - lat1) * RADIAN;

        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1 * RADIAN)
                * Math.cos(lat2 * RADIAN)
                * Math.pow(Math.sin(dlon / 2), 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return EARTH_RADIUS * c;
    }
}
