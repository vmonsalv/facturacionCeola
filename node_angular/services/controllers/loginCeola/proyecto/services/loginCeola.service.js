'use strict'

var reply = require('../../base/utils/reply');
var invoker = require('../../base/invokers/invoker.invoker');
var crypter = require('../../base/utils/crypter');
var crypto = require('crypto');

function doLogin(request, response) {
    try {

        var angularData = JSON.parse(request.body.arg);
        var generator = crypto.createHash('sha1');
        generator.update(angularData.password);

        var param = {
            rut: angularData.rut,
            password: generator.digest('hex')
        }

        var servUsuario = global.config.serv_usuario;

        invoker.invokeService(servUsuario, "login", param, function (data, error) {
            if (error == null) {
                if (data.hasOwnProperty("error")) {
                    response.json(reply.ok(data));
                } else {
                    let permite = false;
                    if (data.superadmin == 1) {
                        permite = true;
                    } else {
                        if (angularData.app == 3) {
                            permite = false;
                        } else {
                            for (var i = 0; i < data.permisos.length; i++) {
                                if (data.permisos[i].aplicacion_id == angularData.app) {
                                    if (data.permisos[i].rol_id == 1 || data.permisos[i].rol_id == 2) {
                                        permite = true;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    
                    if (permite) {
                        let today = new Date();
                        let unyearmas = today.getTime() + 31556900000;

                        var userOnline = {
                            url: "?id=" + crypter.encrypt(
                                JSON.stringify(
                                    {
                                        nombre: data.nombre + " " + data.primer_apellido + " " + data.segundo_apellido,
                                        uid: data.rut,
                                        app: angularData.app,
                                        permisos: data.permisos,
                                        adm: data.superadmin,
                                        expire: unyearmas
                                    }
                                )
                            )
                        }
                       
                        response.json(reply.ok(userOnline));
                    } else {
                        response.json(reply.ok({error: "SIN PERMISO"}));
                    }
                }
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e));
    }
}

function doApps(request, response) {
    try {
        var servParametrico = global.config.serv_parametrico;
        invoker.invokeService(servParametrico, "getApp", null, function (data, error) {
            if (error == null) {
                var apps = [];
                data.forEach(function (element) {
                    if (element.estado != 0) {
                        var app_ = {
                            nombre: element.nombre,
                            codApp: element.id,
                            activo: element.estado,
                            url: element.url
                        }
                        apps.push(app_);
                    }
                }, this);
                response.json(reply.ok(apps));
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e));
    }
}
module.exports = {
    doLogin,
    doApps
};
