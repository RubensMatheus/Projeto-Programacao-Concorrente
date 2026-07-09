package br.ufrn.imd.spark;

import java.io.Serializable;

public class Sensor implements Serializable {

    private double latitude;
    private double longitude;
    private double valor;

    public Sensor() {}

    public Sensor(double latitude, double longitude, double valor) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.valor = valor;
    }

    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }

    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }

    public double getValor() { return valor; }
    public void setValor(double valor) { this.valor = valor; }

    public double latitude()  { return latitude; }
    public double longitude() { return longitude; }
    public double valor()     { return valor; }
}
