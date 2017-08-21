'use strict'

var express = require('express');

var pacientes = require('../services/facturacion.pacientes.service');

var router = express.Router();

router.post('/getPacientes', pacientes.buscaPacientes);
router.post('/getPaciente', pacientes.buscaPaciente);
router.post('/newPaciente', pacientes.newPaciente);
router.post('/deletePaciente', pacientes.deletePaciente);
router.post('/updatePaciente', pacientes.upPaciente);


module.exports = router;
