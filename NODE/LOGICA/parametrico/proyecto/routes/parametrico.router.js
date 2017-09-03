'use strict'

var express = require('express');
var presupuestoService = require('../services/parametrico.service');

var router = express.Router();

router.post('/getPrevisiones', presupuestoService.getPrevisiones);
router.post('/getApp', presupuestoService.getApp);
router.post('/updateEstadoApp', presupuestoService.updateEstadoApp);
router.post('/getMenusApp', presupuestoService.getMenusApp);
router.post('/updateEstadoMenu', presupuestoService.updateEstadoMenu);

/* protesis */
router.post('/getProtesis', presupuestoService.getProtesis);
router.post('/newProtesis', pacienteService.newProtesis);
router.post('/deleteProtesis', pacienteService.deleteProtesis);
router.post('/updateProtesis', pacienteService.updateProtesis);
router.post('/getProte', pacienteService.getProte);

/* insumos */
router.post('/getInsumos', presupuestoService.getInsumos);
router.post('/newInsumo', pacienteService.newInsumo);
router.post('/deleteInsumo', pacienteService.deleteInsumo);
router.post('/updateInsumo', pacienteService.updateInsumo);
router.post('/getInsumo', pacienteService.getInsumo);

/* medicamentos */
router.post('/getMedicamentos', presupuestoService.getMedicamentos);
router.post('/newMedicamento', pacienteService.newMedicamento);
router.post('/deleteMedicamento', pacienteService.deleteMedicamento);
router.post('/updateMedicamento', pacienteService.updateMedicamento);
router.post('/getMedicamento', pacienteService.getMedicamento);

/* Pabellón */
router.post('/getPabellones', presupuestoService.getPabellones);
router.post('/newPabellon', pacienteService.newPabellon);
router.post('/deletePabellon', pacienteService.deletePabellon);
router.post('/updatePabellon', pacienteService.updatePabellon);
router.post('/getPabellon', pacienteService.getPabellon);

/* Equipo medico */
router.post('/getEquipoMedico', presupuestoService.getEquipoMedico);
/*router.post('/newFuncionarioEM', pacienteService.newFuncionarioEM);
router.post('/deleteFuncionarioEM', pacienteService.deleteFuncionarioEM);
router.post('/updateFuncionarioEM', pacienteService.updateFuncionarioEM);
router.post('/getFuncionarioEM', pacienteService.getFuncionarioEM);*/

module.exports = router;