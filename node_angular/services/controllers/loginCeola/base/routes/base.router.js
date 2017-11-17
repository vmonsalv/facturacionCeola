'use strict'

var express = require('express');

var baseService = require('../services/base.service');
var menuService = require('../services/menu.service');
var mailService = require('../services/mail.service');
var userService = require('../services/user.service');
var navService = require('../services/navigate.service');


var router = express.Router();

router.post('/reload', baseService.reload);

router.post('/getMenus', menuService.buscaMenus);
router.post('/getModulos', menuService.buscaModulos);

router.post('/getUser', userService.cargaUsuario);
router.post('/saveKeyUser', userService.saveKeyUser);
router.post('/getKeyUser', userService.getKeyUser);

router.post('/sendMail', mailService.enviaCorreoContacto);

router.post('/navigate', navService.navigate);

module.exports = router;
