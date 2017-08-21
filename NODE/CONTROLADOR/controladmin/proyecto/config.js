'use strict'

var config = {
    "app": {
        "port": 3002
    },
    "url": {
        "host": "192.168.0.100",  // interno
        //"host": "200.104.84.76", // externo
        "port": 2000,
        "path": "/urlLogica",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": false,
    "services": [
        { "name": "usuario" },
        { "name": "parametrico" }
        //{ "name": "usuario_ext" },
        //{ "name": "parametrico_ext" },
    ],
    "crypter_algorithm": "aes-256-ctr",
    "crypter_password": "c3014",
    "usaCrypter": false
};

module.exports = config;
