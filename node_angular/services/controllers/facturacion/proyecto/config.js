'use strict'

var config = {
    "app": {
        "port": 3001
    },
    "url": {
        "host": "192.168.0.100",
        //"host": "200.86.1.193",
        "port": 2000,
        "path": "/urlLogica",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": false,
    "services": [
        { "name": "pacientes" },
        { "name": "usuario" },
        { "name": "pago" },
        { "name": "presupuesto" },
        { "name": "cirugia" },
        { "name": "honorarios" }
        //{ "name": "pacientes_ext" },
        //{ "name": "usuario_ext" },
        //{ "name": "pago_ext" },
        //{ "name": "presupuesto_ext" },
        //{ "name": "cirugia_ext" },
        //{ "name": "honorarios_ext" }
    ],
    "crypter_algorithm": "aes-256-ctr",
    "crypter_password": "c3014",
    "usaCrypter": false
};

module.exports = config;
