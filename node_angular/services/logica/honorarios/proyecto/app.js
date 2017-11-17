'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    res.setHeader('Access-Control-Max-Age', '60');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

global.log = require('../base/utils/logConsola');

var config = require('../config');
var loadConfig = require('../base/utils/loadConfig');

function cargaInicial() {
    loadConfig(config, function(data) {
        global.config = data;
    });
}

cargaInicial();

var honorarios_BaseRouter = require('../base/routes/base.router');
app.use('/honorarios/base/', honorarios_BaseRouter);

var honorariosRouter = require('./routes/honorarios.router');
app.use('/honorarios/', honorariosRouter);

module.exports = app;
