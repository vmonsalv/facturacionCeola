'use strict'

var reply = require('../../base/utils/reply');
var baseServiceCaller = require('./baseServiceCaller.service');

function buscaMenus(request, response) {
    try {
        baseServiceCaller.getMenus({ app: JSON.parse(request.body.arg).app }, function (data, error) {
            var permisosUsuario = JSON.parse(request.body.arg).permisos;
            var rol = "";
            var menusApp = [];
            var adminType = false;
            for (var i = 0; i < permisosUsuario.length; i++) {
                if (JSON.parse(request.body.arg).app == permisosUsuario[i].aplicacion_id) {
                    switch (permisosUsuario[i].rol_id) {
                        case 1:
                            rol = "Usuario";;
                            break;
                        case 2:
                            rol = "Administrador";
                            adminType = true;
                            break;
                        case 3:
                            rol = "Super Administrador";
                            adminType = true;
                            break;
                    }
                    break;
                }
            }
            data.forEach(function (element) {
                var control = false;
                if (adminType && element.metodo == 'admin') {
                    menusApp.push(element);
                    control = true;
                }
                if (!control && element.metodo != 'admin') {
                    menusApp.push(element);
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
                    response.status(200).json(reply.fatal("NODATA"));
                } else {
                    var apps = [];
                    var permisos = JSON.parse(request.body.arg).permisos;
                    //                    console.log(permisos);
                    //                  console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].estado != 0) {
                            for (var x = 0; x < permisos.length; x++) {
                                if (permisos[x].aplicacion_id == data[i].id) {
                                    var control = false;
                                    if (data[i].id == 3 && permisos[x].rol_id == 3) {
                                        var app = {
                                            nombre: data[i].nombre,
                                            codApp: data[i].id,
                                            activo: data[i].estado,
                                            url: data[i].url
                                        }
                                        apps.push(app);
                                        control = true;
                                    }

                                    if (!control && data[i].id != 3) {
                                        var app = {
                                            nombre: data[i].nombre,
                                            codApp: data[i].id,
                                            activo: data[i].estado,
                                            url: data[i].url
                                        }
                                        apps.push(app);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    response.status(200).json(reply.ok(apps));
                }
            } else {
                response.status(200).json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

module.exports = {
    buscaMenus,
    doApps
};
