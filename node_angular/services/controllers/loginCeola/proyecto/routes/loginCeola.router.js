'use strict'

var express = require('express');

var loginCeolaService = require('../services/loginCeola.service');

var router = express.Router();

router.post('/doLogin', loginCeolaService.doLogin);
router.post('/doApps', loginCeolaService.doApps);

module.exports = router;
