'use strict'

var invoker = require('../../base/invokers/invoker.invoker');
var reply = require('../../base/utils/reply');

var baseServiceCaller = require('./baseServiceCaller.service');

var crypter = require('../utils/crypter');
var decryptToken = require('../utils/decryptToken');


function navigate(request, response) {
    try {
        var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);
        var token = request.headers.authorization;
        var msgError = "";

        decryptToken(token, function(dataDecrypt, error) {
            if (error==null) {
                if (!args.hasOwnProperty("proyecto")) {
                    msgError+= "No se ha encontrado el parámetro proyecto.";
                }

                if (!args.hasOwnProperty("modulo")) {
                    if (msgError!="") msgError+= " ";
                    msgError+= "No se ha encontado el parámetro modulo.";
                }

                if (msgError=="") {
                    generaUrl(token, dataDecrypt, args.proyecto, args.modulo, function(dataUrl, error) {
                        if (error==null) {
                            response.json(reply.ok(dataUrl));
                        } else {
                            response.json(reply.throwsError(error));
                        }
                    });
                } else {
                    response.json(reply.error(msgError));
                }
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch(e) {
        response.json(reply.fatal(e));
    }
}

function generaUrl(token, dataDecrypt, proyecto, modulo, callback) {
    var appSelecionada = buscaProyectoToken(proyecto, dataDecrypt);

    if (appSelecionada!=null) {
        var modSeleccionado = buscaModuloToken(modulo, dataDecrypt);

        if (modSeleccionado!=null) {
            var servLogin = global.config.serv_login;

            var paramMod = {
                "idProyecto": parseInt(appSelecionada.idProyecto),
                "codModulo": parseInt(modSeleccionado.codModulo)
            };
            
            invoker.invokeService(servLogin, "getModulo", paramMod, function(dataMod, error) {
                if (error==null) {
                    var urlFinal = dataMod.url;
                    if (urlFinal.lastIndexOf("/") + 1 == urlFinal.length) {
                        urlFinal = urlFinal.substring(0, urlFinal.length-1)
                    }
                    
                    if (dataMod.tipoMod=="JAVA") {
                        creaDataUrl(dataDecrypt, urlFinal, appSelecionada, modSeleccionado, function(dataUrlProy, error) {
                            if (error==null) {
                                urlFinal = dataUrlProy;

                                callback({"url": urlFinal}, null);
                            } else {
                                callback(null, error);
                            }
                        });
                    } else if (dataMod.tipoMod=="ASP") {
                        var paramKey = {
                            "proyecto": appSelecionada.id,
                            "modulo": modSeleccionado.id,
                            "token": token
                        };

                        guardaKey(dataDecrypt.uid, paramKey, function(idSesion, error) {
                            if (error==null) {
                                urlFinal = urlFinal + "?usuario=" + dataDecrypt.uid + "&uid=" + idSesion;

                                callback({"url": urlFinal}, null);
                            } else {
                                callback(null, error);
                            }
                        });
                    } else {
                        var paramKey = {
                            "proyecto": appSelecionada.id,
                            "modulo": modSeleccionado.id,
                            "token": token
                        };

                        guardaKey(dataDecrypt.uid, paramKey, function(idSesion, error) {
                            if (error==null) {
                                urlFinal = urlFinal + "?uid=" + idSesion;

                                callback({"url": urlFinal}, null);
                            } else {
                                callback(null, error);
                            }
                        });
                    }
                } else {
                    callback(null, error);
                }
            });
        } else {
            callback(null, reply.error("No tiene permisos para ejecutar el módulo.").error);
        }
    } else {
        callback(null, reply.error("No tiene permisos para ejecutar la aplicación.").error);
    }
}

function buscaProyectoToken(proyecto, dataDecrypt) {
    var appSeleccionada = null;

    for (var i=0; i<dataDecrypt.apps.length; i++) {
        var unaApp = dataDecrypt.apps[i];

        if (unaApp.id==proyecto) {
            appSeleccionada = unaApp;
            break;
        }
    }

    return appSeleccionada;
}

function buscaModuloToken(modulo, dataDecrypt) {
    var modSeleccionado = null;

    for (var i=0; i<dataDecrypt.modulos.length; i++) {
        var unModulo = dataDecrypt.modulos[i];

        if (unModulo.id==modulo) {
            modSeleccionado = unModulo;
            break;
        }
    }

    return modSeleccionado;
}

function creaDataUrl(dataUser, url_base, proyecto, modulo, cbUrl) {
    try {
        var paramCrypter = []
        paramCrypter.push({"code": "u", "value": dataUser.uid});
        paramCrypter.push({"code": "p", "value": dataUser.password});
        paramCrypter.push({"code": "r", "value": dataUser.rut});
        paramCrypter.push({"code": "n", "value": dataUser.nombres});
        paramCrypter.push({"code": "a", "value": dataUser.apellidos});
        paramCrypter.push({"code": "f", "value": dataUser.nombreCompleto});
        paramCrypter.push({"code": "d", "value": dataUser.fechaFinPassword});
        paramCrypter.push({"code": "i", "value": dataUser.correouv});
        paramCrypter.push({"code": "m", "value": dataUser.mail});
        paramCrypter.push({"code": "c", "value": (new Date().getTime() + parseInt(24 * 60 * 1000))});
        paramCrypter.push({"code": "s", "value": proyecto.idProyecto});
        paramCrypter.push({"code": "z", "value": proyecto.prefijo});
        paramCrypter.push({"code": "o", "value": modulo.codModulo});

        var maxCrypters = paramCrypter.length;
        var contCrypter = 0;

        var urlFinal = "?";

        baseServiceCaller.crypterJava({"method": "encrypt", "data": {"arg": paramCrypter[contCrypter].value}, "version": 4}, function callback(dataJava, error) {
            if (error==null) {
                urlFinal+= paramCrypter[contCrypter].code + "=" + dataJava + "&";

                if (++contCrypter!=maxCrypters) {
                    baseServiceCaller.crypterJava({"method": "encrypt", "data": {"arg": paramCrypter[contCrypter].value}, "version": 4}, callback);
                }

                if (contCrypter==maxCrypters) {
                    cbUrl(url_base + urlFinal.substring(0, urlFinal.length-1), null);
                }
            } else {
                contCrypter = maxCrypters - 1;

                if (++contCrypter!=maxCrypters) {
                    baseServiceCaller.crypterJava({"method": "encrypt", "data": {"arg": paramCrypter[contCrypter].value}, "version": 4}, callback);
                }

                cbUrl(null, error);
            }
        });
    } catch(e) {
        cbUrl(null, reply.error(e.message).error);
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


module.exports = {
    navigate
};
