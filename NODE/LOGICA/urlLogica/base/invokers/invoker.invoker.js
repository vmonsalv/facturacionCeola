'use strict'

var http = require('http');
var reply = require('../utils/reply');


var headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
};

var finalData = '';


function getOptions(host, port, path, serviceName) {
    var options = {
        host: host,
        port: port,
        path: `${path}/${serviceName}`,
        method: 'POST',
        headers: headers
    };

    return options;
}

function invokeService(host, port, path, serviceName, params, callback) {
    var op = getOptions(host, port, path, serviceName);

    var req = http.request(op, function(res) {
        finalData = "";

        res.on('data', function(data) {
            finalData += data.toString();
        });

        res.on('end', function() {
            callback(JSON.parse(finalData));
        });
    });

    req.write('arg=' + (params==null ? {} : encodeURIComponent(JSON.stringify(params))));

    req.on('error', function(e) {
        callback(reply.fatal(`${host}:${port}${path}/${serviceName}: ${e.message}`));
    });

    req.end();
}


module.exports = {
    invokeService
};
