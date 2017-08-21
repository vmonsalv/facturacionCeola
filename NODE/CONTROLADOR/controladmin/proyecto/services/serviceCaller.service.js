'use strict'

var invoker = require('../../base/invokers/invoker.invoker');

/******************** APLICACION */

function cambiaEstadoApp(dataIN, callback) {
    var servParametrico = global.config.serv_parametrico;
    invoker.invokeService(servParametrico.host, servParametrico.port, servParametrico.path, "updateEstadoApp", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function cambiaEstadoMenu(dataIN, callback) {
    var servParametrico = global.config.serv_parametrico;
    invoker.invokeService(servParametrico.host, servParametrico.port, servParametrico.path, "updateEstadoMenu", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

/******************** USUARIOS */

function buscaUsuarios(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "getUsuarios", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function buscaRolesUsuario(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "getRolesUsuario", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function editaUsuario(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "upUsuario", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function creaUsuario(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "newUsuario", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function asignaRoles(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "asignarRoles", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

module.exports = {
    cambiaEstadoApp,
    cambiaEstadoMenu,
    buscaUsuarios,
    buscaRolesUsuario,
    editaUsuario,
    creaUsuario,
    asignaRoles
};
