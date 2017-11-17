'use strict'

var dateFormat = require('dateformat');
var currencyFormatter = require('currency-formatter');

dateFormat.i18n = {
    dayNames: [
        'Lun', 'Mar', 'Míe', 'Jue', 'Vie', 'Sab', 'Dom',
        'Lunes', 'Martes', 'Míercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
    ],
    monthNames: [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
};

function monedaFormato(cantidad) {
    var salida = currencyFormatter.format(cantidad, {
        symbol: '$',
        thousand: '.',
        precision: 0,
        format: '%s %v' // %s is the symbol and %v is the value
    });
    return salida;
}

function formatoFecha(fecha, formato){
    return dateFormat(fecha, formato);
}

module.exports = {
    monedaFormato,
    formatoFecha
};