'use strict'

var express = require('express');
var presupuestoService = require('../services/presupuesto.service');

var router = express.Router();

router.post('/getSegPresupuestos', presupuestoService.getSegPresupuestos);
router.post('/getPresupuestosBase', presupuestoService.getPresupuestosBase);
/*router.post('/getPresupuestos', presupuestoService.getPresupuestos);
router.post('/getPresupuesto', presupuestoService.getPresupuesto);
router.post('/newPresupuesto', presupuestoService.newPresupuesto);
router.post('/upPresupuesto', presupuestoService.upPresupuesto);
router.post('/deletePresupuesto', presupuestoService.deletePresupuesto);*/

module.exports = router;
