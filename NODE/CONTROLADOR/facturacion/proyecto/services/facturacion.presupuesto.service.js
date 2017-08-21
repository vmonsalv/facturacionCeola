'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');

function buscaSeguimientos(request, response) {
    try {
        serviceCaller.getSegPresupuestos(null, function (data, error) {
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

function buscaPresupuestosBase(request, response) {
    try {
        var prevision = JSON.parse(request.body.arg).prevision;
        serviceCaller.getPresupuestosBase({ prevision: prevision }, function (data, error) {
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

module.exports = {
    buscaSeguimientos,
    buscaPresupuestosBase
};