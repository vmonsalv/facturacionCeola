'use strict'

var config = {
    "app": {
        "port": 3000
    },
    "url": {
        "host": "192.168.0.100",  // interno
        //"host": "200.86.1.193", // externo
        "port": 2000,
        "path": "/urlLogica",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": false,
    "services": [
        { "name": "usuario" },
        { "name": "parametrico" }
        //{ "name": "usuario_ext" },
        //{ "name": "parametrico_ext" }
    ],
    "crypter_algorithm": "aes-256-ctr",
    "crypter_password": "c3014"
};

module.exports = config;
