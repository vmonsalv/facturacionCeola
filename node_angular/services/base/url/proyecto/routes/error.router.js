'use strict'

var express = require('express');
var errorService = require('../services/error.service');


var router = express.Router();

router.post('/', errorService.getErrorAplicacion);


module.exports = router;
