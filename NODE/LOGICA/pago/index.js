'use strict'

var app = require('./proyecto/app');


app.listen(global.config.app.port, function() {
    console.log(`Pagos en http://localhost:${global.config.app.port}`);
});
