'use strict'

var express = require('express');
var urlLogicaService = require('../services/urlLogica.service');

var router = express.Router();

router.post('/getConfigUrl', urlLogicaService.getUrlService);

module.exports = router;
