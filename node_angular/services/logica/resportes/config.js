'use strict'

var config = {
    "app": {
        "port": 2008,
        "level": "MEDIO"
    },
    "url": {
        "host": "192.168.0.100",
        "port": 1000,
        "path": "/url",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": false,
    "datasources": [
        { "name": "ceola2017" }
    ],
    "usaCrypter": false
};

module.exports = config;
