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


/* Carga configuración base del proyecto */
global.log = require('../base/utils/logConsola');

var config = require('../config');
var loadConfig = require('../base/utils/loadConfig');

function cargaInicial() {
    loadConfig(config, function(data) {
        global.config = data;
    });
}

cargaInicial();


/* Router base se usa en forma transversal por los proyectos Angular */
var loginCeola_baseRouter = require('../base/routes/base.router');
/* Modificar solo el nombre "proyectoBase" por el que corresponda */
app.use('/loginCeola/base/', loginCeola_baseRouter);

/* Validación de token de seguridad en cada llamada a servicios. No eliminar salvo que el proyecto NO requiera seguridad. */
// app.use(function(req, res, next) {
//     var token = req.headers.authorization;
//     if (token) {
//         readToken(token, function(dataToken, error) {
//             if (error==null) {
//                 next();
//             } else {
//                 error.message = "tokenError: " + error.message;
//                 res.json(reply.fatal(error));
//             }
//         });
//     } else {
//         res.json(reply.error("tokenError: no encontrado"));
//     }
// });

/* Router de ejemplo del proyecto, modificar "proyectoBase" por lo que corresponda, debe coindicir con lo definido en el router base (linea 44) */
var loginCeolaRouter = require('./routes/loginCeola.router');
app.use('/loginCeola/', loginCeolaRouter);

module.exports = app;
