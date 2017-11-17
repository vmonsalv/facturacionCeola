'use strict'

var express = require('express');
var parametricoService = require('../services/parametrico.service');

var router = express.Router();

router.post('/getPrevisiones', parametricoService.getPrevisiones);
router.post('/getApp', parametricoService.getApp);
router.post('/updateEstadoApp', parametricoService.updateEstadoApp);
router.post('/getMenusApp', parametricoService.getMenusApp);
router.post('/updateEstadoMenu', parametricoService.updateEstadoMenu);
router.post('/getProtesis', parametricoService.getProtesis);
router.post('/getInsumos', parametricoService.getInsumos);
router.post('/getMedicamentos', parametricoService.getMedicamentos);
router.post('/getEquipoMedico', parametricoService.getEquipoMedico);
router.post('/getPrestaciones', parametricoService.getPrestaciones);

/* PREVISION */
router.post('/getPrevisiones', parametricoService.getPrevisiones);
router.post('/newPrevision', parametricoService.newPrevision);
router.post('/deletePrevision', parametricoService.deletePrevision);
router.post('/getPrevision', parametricoService.getPrevision);
router.post('/upPrevision', parametricoService.upPrevision);


module.exports = router;
