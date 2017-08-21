'use strict'

var express = require('express');

var usuario = require('../services/controladmin.usuario.service');

var router = express.Router();

router.post('/getUsuarios', usuario.buscaUsuarios);
router.post('/updateUsuario', usuario.editaUsuario);
router.post('/createUsuario', usuario.creaUsuario);

module.exports = router;
