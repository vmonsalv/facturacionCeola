'use strict'

var fs = require("fs");
var reply = require('../../base/utils/reply');


function getConfigDatabase(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);
        
        if (args.hasOwnProperty("name")) {
            var baseDato = args.name;

            fs.exists("./proyecto/models/" + baseDato + ".json", (exists) => {
                if (exists) {
                    var data = JSON.parse(fs.readFileSync("./proyecto/models/" + baseDato + ".json"));

                    response.status(200).json(reply.ok(data));
                } else {
                    response.status(200).json(reply.error("No se ha encontrado los datos de conexión para '" + baseDato + "'"));
                }
            });
        } else {
            response.status(200).json(reply.error("No se ha encontrado valor para el parámetro name"));
        }
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}


module.exports = {
    getConfigDatabase
};
