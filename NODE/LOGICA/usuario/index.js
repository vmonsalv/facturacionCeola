'use strict'

var app = require('./proyecto/app');

app.listen(global.config.app.port, function() {
    console.log(`Usuario en http://localhost:${global.config.app.port}`);
});
