'use strict'

var express = require('express');
var configService = require('../services/config.service');
var errorService = require('../services/error.service');

var router = express.Router();

router.post('/', errorService.getErrorServicio);
router.post('/getConfigDatabase', configService.getConfigDatabase);


module.exports = router;
