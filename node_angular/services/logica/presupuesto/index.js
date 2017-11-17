'use strict'

var app = require('./proyecto/app');
var infoApp = require('./package.json');

log.log("Esperando 3 segundos antes de iniciar servidor");

setTimeout(function() {
    app.listen(global.config.app.port, function() {
        global.log.log(`${infoApp.name} (v ${infoApp.version}) funcionando en http://localhost:${global.config.app.port}`);
    });
}, 3000);
