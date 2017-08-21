'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');
var validador = require('../utils/validadores');

function buscaPacientes(request, response) {
    try {
        serviceCaller.getPacientes(null, function (data, error) {
            if (error == null) {
                response.json(reply.ok(data));
            } else {
                response.json(reply.throwsError(error));
            }
        });
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

function buscaPaciente(request, response) {
    try {
        if (validador.validarCampo(JSON.parse(request.body.arg).rut, "rut")) {
            serviceCaller.getPaciente(JSON.parse(request.body.arg), function (data, error) {
                if (error == null) {
                    response.json(reply.ok(data));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.ok("El Rut ingresado es invalido."));
        }
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

function newPaciente(request, response) {
    try {
        if (validador.validarCampo(JSON.parse(request.body.arg).rut, "rut")) {
            var datos = {
                rut: (typeof JSON.parse(request.body.arg).rut !== "undefined") ? JSON.parse(request.body.arg).rut : null,
                nombres: (typeof JSON.parse(request.body.arg).nombres !== "undefined") ? JSON.parse(request.body.arg).nombres : null,
                apellidoPA: (typeof JSON.parse(request.body.arg).apellidoPA !== "undefined") ? JSON.parse(request.body.arg).apellidoPA : null,
                apellidoMA: (typeof JSON.parse(request.body.arg).apellidoMA !== "undefined") ? JSON.parse(request.body.arg).apellidoMA : null,
                prevision: (typeof JSON.parse(request.body.arg).prevision !== "undefined") ? JSON.parse(request.body.arg).prevision : null,
                fono: (typeof JSON.parse(request.body.arg).fono !== "undefined") ? JSON.parse(request.body.arg).fono : null,
                movil: (typeof JSON.parse(request.body.arg).movil !== "undefined") ? JSON.parse(request.body.arg).movil : null,
                direccion: (typeof JSON.parse(request.body.arg).direccion !== "undefined") ? JSON.parse(request.body.arg).direccion : null,
                correo: (typeof JSON.parse(request.body.arg).correo !== "undefined") ? JSON.parse(request.body.arg).correo : null,
                fec_nac_glosa: (typeof JSON.parse(request.body.arg).fec_nac_glosa !== "undefined") ? JSON.parse(request.body.arg).fec_nac_glosa : null,
                estado: ((typeof JSON.parse(request.body.arg).estado !== "undefined") ? ((JSON.parse(request.body.arg).estado.length > 0) ? JSON.parse(request.body.arg).estado : 1) : null),
                creado_por: (typeof JSON.parse(request.body.arg).creado_por !== "undefined") ? JSON.parse(request.body.arg).creado_por : null
            }
            serviceCaller.newPaciente(datos, function (data, error) {
                if (error == null) {
                    response.json(reply.ok(data));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.ok("El Rut ingresado es invalido."));
        }
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

function deletePaciente(request, response) {
    try {
        if (validador.validarCampo(JSON.parse(request.body.arg).rut, "rut")) {
            serviceCaller.deletePaciente(JSON.parse(request.body.arg), function (data, error) {
                if (error == null) {
                    response.json(reply.ok(data));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.ok("El Rut ingresado es invalido."));
        }
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

function upPaciente(request, response) {
    try {

        if (validador.validarCampo(JSON.parse(request.body.arg).rut, "rut")) {
            var datos = {
                rut: (typeof JSON.parse(request.body.arg).rut !== "undefined") ? JSON.parse(request.body.arg).rut : null,
                nombres: (typeof JSON.parse(request.body.arg).nombres !== "undefined") ? JSON.parse(request.body.arg).nombres : null,
                apellidoPA: (typeof JSON.parse(request.body.arg).apellidoPA !== "undefined") ? JSON.parse(request.body.arg).apellidoPA : null,
                apellidoMA: (typeof JSON.parse(request.body.arg).apellidoMA !== "undefined") ? JSON.parse(request.body.arg).apellidoMA : null,
                prevision: (typeof JSON.parse(request.body.arg).prevision !== "undefined") ? JSON.parse(request.body.arg).prevision : null,
                fono: (typeof JSON.parse(request.body.arg).fono !== "undefined") ? JSON.parse(request.body.arg).fono : null,
                movil: (typeof JSON.parse(request.body.arg).movil !== "undefined") ? JSON.parse(request.body.arg).movil : null,
                direccion: (typeof JSON.parse(request.body.arg).direccion !== "undefined") ? JSON.parse(request.body.arg).direccion : null,
                correo: (typeof JSON.parse(request.body.arg).correo !== "undefined") ? JSON.parse(request.body.arg).correo : null,
                fec_nac_glosa: (typeof JSON.parse(request.body.arg).fec_nac_glosa !== "undefined") ? JSON.parse(request.body.arg).fec_nac_glosa : null,
                estado: ((typeof JSON.parse(request.body.arg).estado !== "undefined") ? ((JSON.parse(request.body.arg).estado.length > 0) ? JSON.parse(request.body.arg).estado : 1) : null),
                creado_por: (typeof JSON.parse(request.body.arg).creado_por !== "undefined") ? JSON.parse(request.body.arg).creado_por : null
            }
            serviceCaller.updatePaciente(datos, function (data, error) {
                if (error == null) {
                    response.json(reply.ok(data));
                } else {
                    response.json(reply.throwsError(error));
                }
            });
        } else {
            response.json(reply.ok("El Rut ingresado es invalido."));
        }
    } catch (e) {
        response.json(reply.fatal(e.message));
    }
}

module.exports = {
    buscaPacientes,
    buscaPaciente,
    newPaciente,
    deletePaciente,
    upPaciente
};