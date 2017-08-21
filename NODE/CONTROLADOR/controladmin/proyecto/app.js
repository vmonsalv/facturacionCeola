'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var reply = require('../base/utils/reply');
var readToken = require('../base/utils/readToken');


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


global.config = require('./config');
var config = require('../base/utils/loadConfig').loadConfiguration();

var baseRouter = require('../base/routes/base.router');
app.use('/controladmin/base/', baseRouter);

var controlUsuarioRouter = require('./routes/controladmin.usuario.router');
app.use('/controladmin/usuario/', controlUsuarioRouter);

var controlAplicacionRouter = require('./routes/controladmin.aplicacion.router');
app.use('/controladmin/aplicacion/', controlAplicacionRouter);


module.exports = app;
