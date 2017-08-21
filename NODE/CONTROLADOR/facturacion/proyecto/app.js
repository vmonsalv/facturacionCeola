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
app.use('/facturacion/base/', baseRouter);

/*app.use(function(req, res, next) {
    var token = req.headers.authorization;
    if (token) {
        readToken(token, function(dataToken, error) {
            if (error==null) {
                next();
            } else {
                res.status(200).json(reply.fatal("tokenError: " + error));
            }
        });
    } else {
        res.status(200).json(reply.error("tokenError: no encontrado"));
    }
});*/


var pacientesRouter = require('./routes/facturacion.pacientes.router');
var previsionRouter = require('./routes/facturacion.prevision.router');
var presupuestoRouter = require('./routes/facturacion.presupuesto.router');
app.use('/facturacion/pacientes/', pacientesRouter);
app.use('/facturacion/prevision/', previsionRouter);
app.use('/facturacion/presupuesto/', presupuestoRouter);

module.exports = app;
