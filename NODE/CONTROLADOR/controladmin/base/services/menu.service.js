'use strict'

var reply = require('../../base/utils/reply');
var baseServiceCaller = require('./baseServiceCaller.service');

function buscaMenus(request, response) {
    try {
        baseServiceCaller.getMenus({ app: JSON.parse(request.body.arg).app }, function (data, error) {
            var rol = "";
            var adminType = false;
            if (JSON.parse(request.body.arg).usuario.admin == 1) {
                rol = "Super Administrador";
                adminType = true;
            } else {
                for (var i = 0; i < JSON.parse(request.body.arg).usuario.permisos.length; i++) {
                    if (JSON.parse(request.body.arg).app == JSON.parse(request.body.arg).usuario.permisos[i].aplicacion_id) {
                        switch (JSON.parse(request.body.arg).usuario.permisos[i].rol_id) {
                            case 1:
                                rol = "Usuario";;
                                break;
                            case 2:
                                rol = "Administrador";
                                adminType = true;
                                break;
                        }
                        break;
                    }
                }
            }
            var menusApp = [];
            data.forEach(function (element) {
                if (element.estado != 0) {
                    if (JSON.parse(request.body.arg).usuario.admin == 1) {
                        menusApp.push(element);
                    } else if (JSON.parse(request.body.arg).usuario.admin == 0) {
                        var control = false;
                        if (adminType && element.metodo == 'admin') {
                            menusApp.push(element);
                            control = true;
                        }
                        if (!control && element.metodo != 'admin') {
                            menusApp.push(element);
                        }
                    }
                }
            }, this);
            response.status(200).json(reply.ok({ menus: menusApp, rol: rol }));
        });
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

function doApps(request, response) {
    try {
        baseServiceCaller.getApps(null, function (data, error) {
            if (!error) {
                if (data.length == 0) {
                    response.status(200).json(reply.error("No se han encontrado las aplicaciones"));
                } else {
                    var apps = [];
                    data.forEach(function (app) {
                        if (app.estado != 0) {
                            if (JSON.parse(request.body.arg).admin == 1) {
                                apps.push(app);
                            } else if (JSON.parse(request.body.arg).admin == 0) {
                                JSON.parse(request.body.arg).permisos.forEach(function (permiso) {
                                    if (permiso.aplicacion_id == app.id) apps.push(app);
                                }, this);
                            }
                        }
                    }, this);
                    response.json(reply.ok(apps));
                }
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

module.exports = {
    buscaMenus,
    doApps
};
