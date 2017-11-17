'use strict'

var reply = require('../../base/utils/reply');
var invoker = require('../../base/invokers/invoker.invoker');

var serverUrl = global.config.url;

function getUrlService(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);

        if (args.hasOwnProperty("name")) {
            invoker.invokeService(serverUrl, serverUrl.serviceName, {"name": args.name}, function(data, error) {
                if (error) {
                    response.json(reply.throwsError(error));
                } else {
                    response.json(reply.ok(data));
                }
            });
        } else {
            response.json(reply.error("No se ha encontrado valor para el parámetro name"));
        }
    } catch(e) {
        response.json(reply.fatal(e));
    }
}

module.exports = {
    getUrlService
};
