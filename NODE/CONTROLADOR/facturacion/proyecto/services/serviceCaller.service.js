'use strict'

var invoker = require('../../base/invokers/invoker.invoker');

/* :::::::::::::::::::: PREVISIONES :::::::::::::::::::: */

function getPrevisiones(dataIN, callback) {
    var servParametrico = global.config.serv_parametrico;
    invoker.invokeService(servParametrico.host, servParametrico.port, servParametrico.path, "getPrevisiones", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

/* :::::::::::::::::::: PACIENTES :::::::::::::::::::: */
function getPacientes(dataIN, callback) {
    var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "getPacientes", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function getPaciente(dataIN, callback) {
    var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "getPaciente", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function newPaciente(dataIN, callback) {
    var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "newPaciente", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function updatePaciente(dataIN, callback) {
    var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "upPaciente", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function deletePaciente(dataIN, callback) {
    var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "deletePaciente", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

/* :::::::::::::::::::: PRESUPUESTO :::::::::::::::::::: */

function getPresupuestosPaciente(dataIN, callback) {
    /*var servPacientes = global.config.serv_pacientes;
    invoker.invokeService(servPacientes.host, servPacientes.port, servPacientes.path, "getPaciente", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });*/
}

function getSegPresupuestos(dataIN, callback) {
    var servPresupuesto = global.config.serv_presupuesto;
    invoker.invokeService(servPresupuesto.host, servPresupuesto.port, servPresupuesto.path, "getSegPresupuestos", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function getPresupuestosBase(dataIN, callback) {
    var servPresupuesto = global.config.serv_presupuesto;
    invoker.invokeService(servPresupuesto.host, servPresupuesto.port, servPresupuesto.path, "getPresupuestosBase", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}


module.exports = {
    getPrevisiones,
    getPacientes,
    getPaciente,
    newPaciente,
    deletePaciente,
    updatePaciente,
    getPresupuestosPaciente,
    getSegPresupuestos,
    getPresupuestosBase
};
