'use strict'

var reply = require('../utils/reply');
var serviceCaller = require('./baseServiceCaller.service');

function enviaCorreoContacto(request, response) {
    serviceCaller.sendMail(JSON.parse(request.body.arg), function (data, error) {
        if (error == null) {
            if (data == 'send') {
                response.status(200).json(reply.ok(data));
            } else {
                response.status(200).json(reply.error("El correo no pudo ser enviado. Intente nuevamente"));
            }
        } else {
            response.status(200).json(reply.throwsError(error));
        }
    });
}

module.exports = {
    enviaCorreoContacto
};
