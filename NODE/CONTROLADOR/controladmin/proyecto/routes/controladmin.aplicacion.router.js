'use strict'

var express = require('express');

var aplicacion = require('../services/controladmin.aplicacion.service');

var router = express.Router();

router.post('/getApps', aplicacion.buscaApps);
router.post('/updateApp', aplicacion.cambiaEstadoApp);
router.post('/updateMenu', aplicacion.cambiaEstadoMenu);

module.exports = router; 
