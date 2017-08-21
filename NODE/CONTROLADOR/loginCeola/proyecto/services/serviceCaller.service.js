'use strict'

var invoker = require('../../base/invokers/invoker.invoker');

function getLoginUsuario(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "login", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function getApps(dataIN, callback) {
    var servParametrico = global.config.serv_parametrico;
    invoker.invokeService(servParametrico.host, servParametrico.port, servParametrico.path, "getApp", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

module.exports = {
    getLoginUsuario,
    getApps
};
