'use strict'

var express = require('express');
var pacienteService = require('../services/paciente.service');

var router = express.Router();

router.post('/getPacientes', pacienteService.getPacientes);
router.post('/newPaciente', pacienteService.newPaciente);
router.post('/deletePaciente', pacienteService.deletePaciente);
router.post('/getPaciente', pacienteService.getPaciente);
router.post('/upPaciente', pacienteService.upPaciente);

module.exports = router;
