'use strict'

var reply = require('../../base/utils/reply');
var invoker = require('../../base/invokers/invoker.invoker');


var serverUrl = global.config.url;


function getUrlService(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);

        if (args.hasOwnProperty("name")) {
            invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": args.name}, function(data) {
                if (data.status=="OK") {
                    response.status(200).json(reply.ok(data.data));
                } else {
                    response.status(200).json(reply.throwsError(data.error));
                }
            });
        } else {
            response.status(200).json(reply.error("No se ha encontrado valor para el parámetro name"));
        }
    } catch(e) {
        response.status(200).json(reply.fatal(e.message));
    }
}


module.exports = {
    getUrlService
};
