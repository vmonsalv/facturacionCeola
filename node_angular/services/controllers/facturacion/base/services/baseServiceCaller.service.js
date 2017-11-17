'use strict'

var invoker = require('../invokers/invoker.invoker');


function getMenus(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "getMenusApp", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function sendMail(dataIN, callback) {
    var servEmail = global.config.serv_email;
    invoker.invokeService(servEmail.host, servEmail.port, servEmail.path, "sendMail", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}

function getApps(dataIN, callback) {
    var servUsuario = global.config.serv_usuario;
    invoker.invokeService(servUsuario.host, servUsuario.port, servUsuario.path, "getApp", dataIN, function (data) {
        if (data.status == "OK") {
            callback(data.data, null);
        } else {
            callback(null, data.error);
        }
    });
}


module.exports = {
    getMenus,
    sendMail,
    getApps
};
