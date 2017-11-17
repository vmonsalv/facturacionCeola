'use strict'

var reply = require('../../base/utils/reply');
var baseServiceCaller = require('./baseServiceCaller.service');
var crypter = require('../utils/crypter');
var decryptToken = require('../utils/decryptToken');


function cargaUsuario(request, response) {
    try {
        var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;
        var token = request.headers.authorization;

        decryptToken(token, function(dataDecrypt, error) {
            if (error==null) {
                response.json(reply.ok(getInfoUser(dataDecrypt)));
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e));
    }
}

function getInfoUser(dataUser) {
    var ret = {
        "rut": dataUser.rut,
        "nombres": dataUser.nombres,
        "apellidos": dataUser.apellidos,
        "nombreCompleto": dataUser.nombreCompleto,
        "correouv": dataUser.correouv,
        "mail": dataUser.mail,
        "fechaFinPassword": dataUser.fechaFinPassword,
        "foto": dataUser.foto
    };
    return ret;
}

function saveKeyUser(request, response) {
    try {
        var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);
        var msgError = "";

        if (!args.hasOwnProperty("proyecto")) {
            msgError+= "No se ha encontrado el parámetro proyecto.";
        }

        if (!args.hasOwnProperty("modulo")) {
            if (msgError!="") msgError+= " ";
            msgError+= "No se ha encontrado el parámetro modulo.";
        }

        if (!args.hasOwnProperty("token")) {
            if (msgError!="") msgError+= " ";
            msgError+= "No se ha encontrado el parámetro token.";
        }

        if (msgError=="") {
            decryptToken(args.token, function(dataDecrypt, error) {
                if (error==null) {
                    var paramKey = {
                        "proyecto": args.proyecto,
                        "modulo": args.modulo,
                        "token": args.token
                    };

                    guardaKey(dataDecrypt.uid, paramKey, function(idSesion, error) {
                        if (error==null) {
                            response.json(reply.ok({"idSesion": idSesion}));
                        } else {
                            response.json(reply.throwsError(error));
                        }
                    });
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.error(msgError));
        }
    } catch(e) {
        response.json(reply.fatal(e));
    }
}

function guardaKey(rut, paramKey, callback) {
    var idSesion = crypter.encrypt((Math.floor(Math.random() * 9000000) + 987654321) + "." + rut + "." + paramKey.proyecto + "." + new Date().getTime());

    paramKey.idSesion = idSesion;

    baseServiceCaller.saveKeyUser(paramKey, function(dataKey, error) {
        if (error==null) {
            callback(idSesion, null);
        } else {
            callback(null, error);
        }
    });
}

function getKeyUser(request, response) {
    try {
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);

        if (args.hasOwnProperty("idSesion")) {
            baseServiceCaller.getKeyUser({"idSesion": args.idSesion}, function(dataKey, error) {
                if (error==null) {
                    response.json(reply.ok(dataKey));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.error("No se ha encontrado el parámetro idSesion"));
        }
    } catch(e) {
        response.json(reply.fatal(e));
    }
}


module.exports = {
    cargaUsuario,
    saveKeyUser,
    getKeyUser
};
