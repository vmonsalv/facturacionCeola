'use strict'

var reply = require('../../base/utils/reply');
var baseServiceCaller = require('./baseServiceCaller.service');
var crypter = require('../utils/crypter');
var decryptToken = require('../utils/decryptToken');


function buscaModulos(request, response) {
    try {
        var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;
        var token = request.headers.authorization;

        decryptToken(token, function(dataDecrypt, error) {
            if (error==null) {
                var modulos = [];

                for (var i=0; i<dataDecrypt.modulos.length; i++) {
                    var unModulo = dataDecrypt.modulos[i];

                    modulos.push({
                        "id": unModulo.id,
                        "nombre": unModulo.nombre,
                        "estilo": unModulo.estilo,
                        "url": unModulo.url,
                        "moduloActivo": unModulo.moduloActivo,
                        "tipoMod": unModulo.tipoMod
                    });
                }

                response.json(reply.ok(modulos));
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch(e) {
        response.json(reply.fatal(e));
    }
}

function buscaMenus(request, response) {
    try {
        var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;
        var token = request.headers.authorization;
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);

        decryptToken(token, function(dataDecrypt, error) {
            if (error==null) {
                if (args.hasOwnProperty("codModulo")) {
                    var codModulo = args.codModulo;

                    var moduloEncontrado = buscaModuloToken(dataDecrypt, codModulo);

                    if (moduloEncontrado!=null) {
                        buscarMenus(dataDecrypt, moduloEncontrado, function(dataMenus, error) {
                            if (error==null) {
                                response.json(reply.ok(dataMenus));
                            } else {
                                response.json(reply.throwsError(error));
                            }
                        });
                    } else {
                        response.json(reply.error(`Módulo '${codModulo}' no encontrado.`));
                    }
                } else {
                    response.json(reply.error("No se ha encontrado el parámetro codMoulo"));
                }
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch(e) {
        response.json(reply.fatal(e));
    }
}

function buscaModuloToken(dataDecrypt, codModulo) {
    var moduloEncontrado = null;

    for (var i=0; i<dataDecrypt.modulos.length; i++) {
        var unModulo = dataDecrypt.modulos[i];

        if (unModulo.id == codModulo) {
            moduloEncontrado = unModulo;
            break;
        }
    }

    return moduloEncontrado;
}

function buscarMenus(dataDecrypt, modulo, callback) {
    var paramMenu = {
        "codModulo": modulo.codModulo,
        "idProyecto": dataDecrypt.apps[0].idProyecto,
        "rol": leeRoles(dataDecrypt.apps[0].roles)
    };

    baseServiceCaller.getMenus(paramMenu, function(dataMenus, error) {
        if (error == null) {
            callback(dataMenus, null);
        } else {
            callback(null, error);
        }
    });
}

function leeRoles(roles) {
    var stRoles = "";

    for (var i = 0; i < roles.length; i++) {
        stRoles += roles[i].rol;
        if (i + 1 < roles.length) stRoles += ",";
    }

    return stRoles;
}


module.exports = {
    buscaModulos,
    buscaMenus
};
