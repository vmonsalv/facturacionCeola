'use strict'

var express = require('express');
var pacientesService = require('../services/pacientes.service');

var router = express.Router();

router.post('/getPacientes', pacientesService.getPacientes);
router.post('/newPaciente', pacientesService.newPaciente);
router.post('/deletePaciente', pacientesService.deletePaciente);
router.post('/getPaciente', pacientesService.getPaciente);
router.post('/upPaciente', pacientesService.upPaciente);

module.exports = router;