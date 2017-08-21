'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');
var crypter = require('../../base/utils/crypter');
var crypto = require('crypto');

function doLogin(request, response) {
    try {
        var angularData = JSON.parse(request.body.arg);
        var generator = crypto.createHash('sha1');
        generator.update(angularData.password);
        var dataToSend = {
            rut: angularData.rut,
            password: generator.digest('hex')
        }
        serviceCaller.getLoginUsuario(dataToSend, function (data, error) {
            if (error == null) {
                if (data.hasOwnProperty("error")) {
                    response.status(200).json(reply.ok(data));
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
                        response.status(200).json(reply.ok(userOnline));
                    } else {
                        response.status(200).json(reply.ok("SIN_PERMISO"));
                    }
                }
            } else {
                response.status(200).json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

function doApps(request, response) {
    try {
        serviceCaller.getApps(null, function (data, error) {
            if (!error) {
                if (data.length == 0) {
                    response.status(200).json(reply.fatal("NODATA"));
                } else {
                    var apps = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].estado != 0) {
                            var app = {
                                nombre: data[i].nombre,
                                codApp: data[i].id,
                                activo: data[i].estado,
                                url: data[i].url
                            }
                            apps.push(app);
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
    doLogin,
    doApps
};
