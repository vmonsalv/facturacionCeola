'use strict'

var reply = require('../../base/utils/reply');
var serviceCaller = require('./serviceCaller.service');

function buscaPrevisiones(request, response) {
    try {
        serviceCaller.getPrevisiones(null, function (data, error) {
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
    buscaPrevisiones
};