'use strict'

var config = {
    "app": {
        "port": 2001
    },
    "url": {
        "host": "192.168.0.100",//mi ip (lovcalhost)192.168.0.100
        "port": 1000,
        "path": "/url",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": true,
    "datasources": [
        {"name": "ceola2017"}
        //{"name": "ceola2017_int"}
    ]
};

module.exports = config;
