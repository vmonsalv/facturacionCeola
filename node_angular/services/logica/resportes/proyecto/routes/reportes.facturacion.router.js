'use strict'

var express = require('express');
var reportesService = require('../services/reportes.facturacion.service');

var router = express.Router();

router.post('/getPresupuestoPaciente', reportesService.getPresupuestoPaciente);

module.exports = router;
