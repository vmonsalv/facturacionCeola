'use strict'

var express = require('express');

var prevision = require('../services/facturacion.prevision.service');

var router = express.Router();

router.post('/getPrevisiones', prevision.buscaPrevisiones);

module.exports = router;
