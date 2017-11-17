'use strict'

var express = require('express');
var cirugiaService = require('../services/cirugia.service');

var router = express.Router();

router.post('/getAll', cirugiaService.getAll);
router.post('/getCirugias', cirugiaService.getCirugias);
router.post('/getCirugia', cirugiaService.getCirugia);
router.post('/newCirugia', cirugiaService.newCirugia);
router.post('/upCirugia', cirugiaService.upCirugia);
router.post('/deleteCirugia', cirugiaService.deleteCirugia);

module.exports = router;
