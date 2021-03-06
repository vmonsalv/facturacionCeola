'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

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


var configRouter = require('./routes/config.router');
var errorRouter = require('./routes/error.router');

app.use('/', errorRouter);
app.use('/database', configRouter);


module.exports = app;
