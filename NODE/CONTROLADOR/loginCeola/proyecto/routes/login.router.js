'use strict'

var express = require('express');

var login = require('../services/login.service');

var router = express.Router();

router.post('/doLogin', login.doLogin);
router.post('/doApps', login.doApps);

module.exports = router;
