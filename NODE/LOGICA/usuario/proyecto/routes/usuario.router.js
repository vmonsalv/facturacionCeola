'use strict'

var express = require('express');
var usuarioService = require('../services/usuario.service');

var router = express.Router();

router.post('/login', usuarioService.login);
router.post('/getUsuarios', usuarioService.getUsuarios);
router.post('/newUsuario', usuarioService.newUsuario);
router.post('/upUsuario', usuarioService.upUsuario);
router.post('/getUsuario', usuarioService.getUsuario);
router.post('/deleteUsuario', usuarioService.deleteUsuario);
router.post('/asignarRoles', usuarioService.asignarRoles);
router.post('/getRolesUsuario', usuarioService.getRolesUsuario);

module.exports = router;