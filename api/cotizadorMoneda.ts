import axios from 'axios';

interface ApiResponse {
    fecha: string;
    compra: string;
    venta: string;
}
const monedaApi = axios.create({
    baseURL: 'https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api'
});

export const getCotizacionDolarBlue = async() => {
    const resp = await monedaApi.get<ApiResponse>('/dolarblue');
    return {
        fecha: resp.data.fecha,
        compra: parseFloat(resp.data.compra),
        venta: parseFloat(resp.data.venta),
    };
}

export const getCotizacionDolarOficial = async() => {
    const resp = await monedaApi.get<ApiResponse>('/dolaroficial');
    return {
        fecha: resp.data.fecha,
        compra: parseFloat(resp.data.compra),
        venta: parseFloat(resp.data.venta),
    };
}