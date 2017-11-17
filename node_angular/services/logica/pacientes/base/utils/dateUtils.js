'use strict'

function getDateToJSON(fecha) {
    var r = {
        "date": "" + (fecha.getUTCDate() < 10 ? ("0" + fecha.getUTCDate()) : fecha.getUTCDate()),
        "month": "" + (fecha.getUTCMonth() + 1 < 10 ? ("0" + (fecha.getUTCMonth() + 1)) : fecha.getUTCMonth() + 1),
        "year": "" + fecha.getFullYear()
    };

    return r;
}

function getNumberToJSON(fecha) {
    var sFecha = "" + fecha;

    var r = {
        "date": sFecha.substr(6, 2),
        "month": sFecha.substr(4, 2),
        "year": sFecha.substr(0, 4)
    };

    return r;
}

function parseJSONtoDate(fechaJSON) {
    return new Date(fechaJSON.year, fechaJSON.month-1, fechaJSON.date, 0, 0, 0, 0);
}


module.exports = {
    getDateToJSON,
    getNumberToJSON,
	parseJSONtoDate
};
