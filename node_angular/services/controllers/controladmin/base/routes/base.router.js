'use strict'

var express = require('express');

var menuService = require('../services/menu.service');
var mailService = require('../services/mail.service');
var userService = require('../services/user.service');

var router = express.Router();

router.post('/getMenus', menuService.buscaMenus);
router.post('/getApps', menuService.doApps);
router.post('/sendMail', mailService.enviaCorreoContacto);
router.post('/getTokenData', userService.discoveryTokenData);

module.exports = router;
