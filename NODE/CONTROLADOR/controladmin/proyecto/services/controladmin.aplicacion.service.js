'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');
var baseServiceCaller = require('../../base/services/baseServiceCaller.service');
var validador = require('../utils/validadores');

function buscaApps(request, response) {
    try {
        baseServiceCaller.getApps(null, function (data, error) {
            if (!error) {
                if (data.length == 0) {
                    response.status(200).json(reply.error("No se han encontrado las aplicaciones"));
                } else {
                    var cantMaxApp = data.length;
                    var count = 0;
                    var salida = [];
                    baseServiceCaller.getMenus({ app: data[count].id }, function miFuncion(dataMenu) {
                        if (++count != cantMaxApp) {
                            if (dataMenu != null) dataMenu.shift();
                            data[count - 1].menus = dataMenu;
                            if (data[count - 1].id != 3) salida.push(data[count - 1]);
                            baseServiceCaller.getMenus({ app: data[count].id }, miFuncion);
                        }
                        if (count == cantMaxApp) {
                            if (dataMenu != null) dataMenu.shift();
                            data[count - 1].menus = dataMenu;
                            if (data[count - 1].id != 3) salida.push(data[count - 1]);
                            response.json(reply.ok(salida));
                        }
                    });
                }
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

function cambiaEstadoApp(request, response) {
    try {
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);
        if (args.hasOwnProperty("idApp") && args.hasOwnProperty("estado")) {
            serviceCaller.cambiaEstadoApp(args, function (data, error) {
                if (!error) {
                    response.json(reply.ok("OK"));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.error("Falta: idApp, estado"));
        }
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

function cambiaEstadoMenu(request, response) {
    try {
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);
        if (args.hasOwnProperty("idApp") && args.hasOwnProperty("estado") && args.hasOwnProperty("idMenu")) {
            serviceCaller.cambiaEstadoMenu(args, function (data, error) {
                if (!error) {
                    response.json(reply.ok("OK"));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.error("Falta: idApp, idMenu, estado"));
        }
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

module.exports = {
    buscaApps,
    cambiaEstadoApp,
    cambiaEstadoMenu
};