'use strict'

var express = require('express');
var paramService = require('../services/param.service');
var errorService = require('../services/error.service');

var router = express.Router();

router.post('/', errorService.getErrorServicio);
router.post('/getParam', paramService.getParam);
router.post('/getParams', paramService.getParams);
router.post('/getAllParams', paramService.getAllParams);


module.exports = router;
