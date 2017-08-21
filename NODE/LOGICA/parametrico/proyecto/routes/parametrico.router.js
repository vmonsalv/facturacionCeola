'use strict'

var express = require('express');
var presupuestoService = require('../services/parametrico.service');

var router = express.Router();

router.post('/getPrevisiones', presupuestoService.getPrevisiones);
router.post('/getApp', presupuestoService.getApp);
router.post('/updateEstadoApp', presupuestoService.updateEstadoApp);
router.post('/getMenusApp', presupuestoService.getMenusApp);
router.post('/updateEstadoMenu', presupuestoService.updateEstadoMenu);

module.exports = router;
