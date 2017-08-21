'use strict'

var mysql = require('mysql');
var reply = require('../../base/utils/reply');

var invoker = require('../../base/invokers/invoker.invoker');


/* (NO DEFINITIVO)
 * Obtiene todas las cirugias ingresadas
 * Entrada: posibles filtros
 */
function getAll(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_cirugias()', function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

/*
 * Obtiene todas las cirugias ingresadas de un paciente
 * Entrada: rut
 */
function getCirugias(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_obtener_cirugias(?)', [rut], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

/*
 * Obtien una cirugia
 * Entrada: id
 */
function getCirugia(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_cirugia(?)'. [id], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

function newCirugia(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		/*var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;*/

		connection.query('CALL sp_ingresar_cirugia(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

function upCirugia(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		/*var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;
		var dato = JSON.parse(request.body.arg).dato;*/

		connection.query('CALL sp_actualizar_cirugia(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

/*
 * Elimina una cirugia
 * Entrada: id
 */
function deleteCirugia(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_cirugia(?)', [id], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if(results.length != 0){
					response.status(200).json(reply.ok(results));
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

module.exports = {
	getAll,
	getCirugias,
	getCirugia,
	newCirugia,
	upCirugia,
	deleteCirugia,
};
