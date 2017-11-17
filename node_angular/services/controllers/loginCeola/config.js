'use strict'

var config = {
    "app": {
        "port": 3000,
        "level": "SUPERIOR"
    },
    "url": {
        "host": "192.168.0.100",
        "port": 2000,
        "path": "/urlLogica",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": false,
    "services": [
        { "name": "usuario" },
        { "name": "parametrico" }
    ],
    "params": [
        {
            "app": "base",
            "params": [
                { "code": "crypter_algorithm" },
                { "code": "crypter_password" }
            ]
        }
    ],
    "usaCrypter": false
};

module.exports = config;
