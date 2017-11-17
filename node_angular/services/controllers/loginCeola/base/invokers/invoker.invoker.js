'use strict'

var http = require('http');
var reply = require('../utils/reply');


var headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
};


function getOptions(dataServ, serviceName) {
    var options = {
        host: dataServ.host,
        port: dataServ.port,
        path: `${dataServ.path}/${serviceName}`,
        method: 'POST',
        headers: headers
    };

    return options;
}

function invokeService(dataServ, serviceName, params, callback) {
    try {
        var op = getOptions(dataServ, serviceName);

        var req = http.request(op, function(res) {
            var finalData = "";

            res.on('data', function(data) {
                finalData += data.toString();
            });

            res.on('end', function() {
                try {
                    var result = JSON.parse(finalData);

                    if (result.status=="OK") {
                        callback(result.data, null);
                    } else {
                        callback(null, result.error);
                    }
                } catch(error) {
                    callback(null, reply.fatal(`${dataServ.host}:${dataServ.port}${dataServ.path}/${serviceName}: ${error.message}`).error);
                }
            });
        });

        req.write('arg=' + (params==null ? encodeURIComponent(JSON.stringify({})) : encodeURIComponent(JSON.stringify(params))));

        req.on('error', function(error) {
            callback(null, reply.fatal(`${dataServ.host}:${dataServ.port}${dataServ.path}/${serviceName}: ${error.message}`).error);
        });

        req.end();
    } catch(error) {
        callback(null, reply.fatal(`${dataServ.host}:${dataServ.port}${dataServ.path}/${serviceName}: ${error.message}`).error);
    }
}


module.exports = {
    invokeService
};
