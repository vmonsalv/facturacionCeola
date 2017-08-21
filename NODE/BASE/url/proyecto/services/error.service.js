'use strict'

var reply = require('../../base/utils/reply');


function getErrorAplicacion(request, response) {
    response.status(200).json(reply.error("No se ha encontrado aplicación"));
}

function getErrorServicio(request, response) {
    response.status(200).json(reply.error("No se ha encontrado servicio"));
}


module.exports = {
    getErrorAplicacion,
    getErrorServicio
};
