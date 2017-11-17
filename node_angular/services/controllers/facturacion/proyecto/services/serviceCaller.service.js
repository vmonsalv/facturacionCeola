'use strict'

var invoker = require('../../base/invokers/invoker.invoker');

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

/*
 * Obtiene todos los presupuestos
 */


/*
 * Obtiene presupuestos por usuario
 */

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

/*
 * Obtiene un presupuesto
 */


/*
 * Guarda un presupuesto
 */


/*
 * Elimina un presupuesto
 */

module.exports = {
    getPacientes,
    getPaciente,
    newPaciente,
    deletePaciente,
    updatePaciente,
    getPresupuestosPaciente
};
