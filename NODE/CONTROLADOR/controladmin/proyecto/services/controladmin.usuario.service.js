'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');
var validador = require('../utils/validadores');
var crypto = require('crypto');

function buscaUsuarios(request, response) {
    try {
        serviceCaller.buscaUsuarios(null, function (data, error) {
            if (!error) {
                if (data.length == 0) {
                    response.json(reply.error("No se han encontrado los usuarios"));
                } else {
                    var cantMaxUsuarios = data.length;
                    var count = 0;
                    var salida = [];
                    serviceCaller.buscaRolesUsuario({ rut: data[count].rut }, function miFuncion(roles, errorRol) {
                        if (!errorRol) {
                            if (++count != cantMaxUsuarios) {
                                data[count - 1].roles = roles;
                                salida.push(data[count - 1]);
                                serviceCaller.buscaRolesUsuario({ rut: data[count].rut }, miFuncion);
                            }
                            if (count == cantMaxUsuarios) {
                                data[count - 1].roles = roles;
                                salida.push(data[count - 1]);
                                response.json(reply.ok(salida));
                            }
                        } else {
                            response.json(reply.throwsError(errorRol));
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

function editaUsuario(request, response) {
    try {
        var angularData = JSON.parse(request.body.arg);
        serviceCaller.editaUsuario(angularData.usuario, function (data, error) {
            if (!error) {
                var maxRoles = angularData.roles.length;
                var count = 0;
                if (data.hasOwnProperty("error")) {
                    response.json(reply.ok(data.error));
                } else {
                    _asignaRoles(angularData.roles[count], function miFuncion(data, error) {
                        if (!error) {
                            if (++count != maxRoles) {
                                _asignaRoles(angularData.roles[count], miFuncion);
                            }
                            if (count == maxRoles) {
                                response.json(reply.ok("OK"));
                            }
                        } else {
                            response.json(reply.throwsError(error));
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

function creaUsuario(request, response) {
    try {
        var angularData = JSON.parse(request.body.arg);
        var generator = crypto.createHash('sha1');
        generator.update(angularData.usuario.rut);
        angularData.usuario.password = generator.digest('hex');
        serviceCaller.creaUsuario(angularData.usuario, function (data, error) {
            if (!error) {
                var maxRoles = angularData.roles.length;
                var count = 0;
                if (data.hasOwnProperty("error")) {
                    response.json(reply.ok(data));
                } else {
                    _asignaRoles(angularData.roles[count], function miFuncion(data, error) {
                        if (!error) {
                            if (++count != maxRoles) {
                                _asignaRoles(angularData.roles[count], miFuncion);
                            }
                            if (count == maxRoles) {
                                response.json(reply.ok("OK"));
                            }
                        } else {
                            response.json(reply.throwsError(error));
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

function _asignaRoles(roles, callback) {
    serviceCaller.asignaRoles(roles, function (data, error) {
        if (!error) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

module.exports = {
    buscaUsuarios,
    editaUsuario,
    creaUsuario
};