'use strict'

var mysql = require('mysql');
var reply = require('../../base/utils/reply');

var invoker = require('../../base/invokers/invoker.invoker');


/* :::::::::::::::::::: PRESUPUESTO INGRESADOS :::::::::::::::::::: */

/*
 *
 * Entrada:
 */
function getSegPresupuestos(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_presupuestos_seguimientos()', function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results[0].length != 0) {
					if (results[0][0].hasOwnProperty("ERR_MSSG")) {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					} else {
						response.json(reply.ok(results[0]));
					}
				} else {
					response.json(reply.ok("Error al obtener seguimientos."));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

/*
 *
 * Entrada:
 */
function getPresupuestosBase(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var prevision = JSON.parse(request.body.arg).prevision;

		connection.query('CALL sp_obtiene_presupuesto_base(?)', [prevision], function (error, results, fields) {
			if(error){
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results[0].length != 0) {
					if (results[0][0].hasOwnProperty("ERR_MSSG")) {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					} else {
						response.json(reply.ok(results[0]));
					}
				} else {
					response.json(reply.ok("Error al obtener presupuestos base."));
				}
			}
		});
		connection.end();
	} catch(e){
		response.status(200).json(reply.fatal(e.message));
	}
}

/*
 * Obtiene todos los presupuestos ingresados de un usuario
 * Entrada: rut
 */
function getPresupuestos(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_obtener_presupuestos(?)', [rut], function (error, results, fields) {
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
 * Obtiene un presupuesto
 * Entrada: id
 */
function getPresupuesto(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_presupuesto(?)', [id], function (error, results, fields) {
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

function newPresupuesto(request, response){
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

		connection.query('CALL sp_ingresar_presupuesto(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
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

function upPresupuesto(request, response){
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

		connection.query('CALL sp_actualizar_presupuesto(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
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
 * Elimina un presupuesto
 * Entrada: id
 */
function deletePresupuesto(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_presupuesto(?)', [id], function (error, results, fields) {
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

/* :::::::::::::::::::: PRESUPUESTO BASE :::::::::::::::::::: */

/*
 * Obtiene todos los presupuestos base
 *
 */
function getAllBase(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_presupuestos_base(?)', function (error, results, fields) {
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
 * Obtiene un presupuesto base
 *
 */
function getBase(request, response){
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

		connection.query('CALL sp_obtener_presupuesto_base(?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
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

function newBase(request, response){
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

		connection.query('CALL sp_ingresar_presupuesto_base(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
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

function upBase(request, response){
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

		connection.query('CALL sp_actualizar_presupuesto_base(?,?,?,?,?,?)', [dato,dato,dato,dato,dato], function (error, results, fields) {
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
 * Elimina un presupuesto base
 * Entrada: id
 */
function deleteBase(request, response){
	try{
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_presupuesto_base(?)', [id], function (error, results, fields) {
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
	getSegPresupuestos,
	getPresupuestosBase
};
