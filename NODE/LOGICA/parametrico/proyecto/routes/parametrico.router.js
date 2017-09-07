'use strict'

var express = require('express');
var parametricoService = require('../services/parametrico.service');

var router = express.Router();

router.post('/getPrevisiones', parametricoService.getPrevisiones);
router.post('/getApp', parametricoService.getApp);
router.post('/updateEstadoApp', parametricoService.updateEstadoApp);
router.post('/getMenusApp', parametricoService.getMenusApp);
router.post('/updateEstadoMenu', parametricoService.updateEstadoMenu);

/* protesis */
router.post('/getProtesis', parametricoService.getProtesis);
router.post('/newProtesis', parametricoService.newProtesis);
router.post('/deleteProtesis', parametricoService.deleteProtesis);
router.post('/updateProtesis', parametricoService.updateProtesis);
router.post('/getProte', parametricoService.getProte);

/* insumos */
router.post('/getInsumos', parametricoService.getInsumos);
router.post('/newInsumo', parametricoService.newInsumo);
router.post('/deleteInsumo', parametricoService.deleteInsumo);
router.post('/updateInsumo', parametricoService.updateInsumo);
router.post('/getInsumo', parametricoService.getInsumo);

/* medicamentos */
router.post('/getMedicamentos', parametricoService.getMedicamentos);
router.post('/newMedicamento', parametricoService.newMedicamento);
router.post('/deleteMedicamento', parametricoService.deleteMedicamento);
router.post('/updateMedicamento', parametricoService.updateMedicamento);
router.post('/getMedicamento', parametricoService.getMedicamento);

/* Pabellón */
router.post('/getPabellones', parametricoService.getPabellones);
router.post('/newPabellon', parametricoService.newPabellon);
router.post('/deletePabellon', parametricoService.deletePabellon);
router.post('/updatePabellon', parametricoService.updatePabellon);
router.post('/getPabellon', parametricoService.getPabellon);

/* Equipo medico */
router.post('/getEquipoMedico', parametricoService.getEquipoMedico);
/*router.post('/newFuncionarioEM', parametricoService.newFuncionarioEM);
router.post('/deleteFuncionarioEM', parametricoService.deleteFuncionarioEM);
router.post('/updateFuncionarioEM', parametricoService.updateFuncionarioEM);
router.post('/getFuncionarioEM', parametricoService.getFuncionarioEM);*/

module.exports = router;