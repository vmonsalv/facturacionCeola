'use strict'

var express = require('express');

var presupuesto = require('../services/facturacion.presupuesto.service');

var router = express.Router();

router.post('/getSegPresupuestos', presupuesto.buscaSeguimientos);
router.post('/getPresupuestosBase', presupuesto.buscaPresupuestosBase);

module.exports = router;
