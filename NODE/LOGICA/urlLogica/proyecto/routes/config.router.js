'use strict'

var express = require('express');
var configService = require('../services/config.service');

var router = express.Router();

router.post('/getConfigUrl', configService.getUrlService);


module.exports = router;
