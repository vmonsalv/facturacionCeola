'use strict'

var app = require('./proyecto/app');


app.listen(global.config.app.port, function() {
    console.log(`Login Ceola en http://localhost:${global.config.app.port}`);
});
