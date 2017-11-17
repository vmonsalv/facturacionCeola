'use strict'

var mysql = require('mysql');

var reply = require('../../base/utils/reply');
var invoker = require('../../base/invokers/invoker.invoker');


function getPacientes(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		connection.query('CALL sp_obtener_pacientes()', function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error));
			} else {
				if (results[0].length != 0) {
					if (results[0][0].hasOwnProperty("ERR_MSSG")) {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					} else {
						response.json(reply.ok(results[0]));
					}
				} else {
					response.json(reply.ok("Error al obtener los pacientes."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function getPaciente(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_obtener_paciente(?)', [rut], function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error));
			} else {
				if (results[0].length != 0) {
					if (results[0][0].hasOwnProperty("ERR_MSSG")) {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					} else {
						response.json(reply.ok(results[0][0]));
					}
				} else {
					response.json(reply.error("Error al obtener el paciente [" + rut + "]"));
				}
			}
		});
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function newPaciente(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;
		var nombre = JSON.parse(request.body.arg).nombres;
		var primer_apellido = JSON.parse(request.body.arg).apellidoPA;
		var segundo_apellido = JSON.parse(request.body.arg).apellidoMA;
		var prevision_id = JSON.parse(request.body.arg).prevision;
		var telefono = JSON.parse(request.body.arg).fono;
		var movil = JSON.parse(request.body.arg).movil;
		var email = JSON.parse(request.body.arg).correo;
		var direccion = JSON.parse(request.body.arg).direccion;
		var fecha_nacimiento = JSON.parse(request.body.arg).fec_nac_glosa;
		var creado_por = JSON.parse(request.body.arg).creado_por;

		connection.query('CALL sp_ingresar_paciente(?,?,?,?,?,?,?,?,?,?,?)', [rut, nombre, primer_apellido, segundo_apellido, prevision_id, telefono, movil, email, direccion, fecha_nacimiento, creado_por], function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if (results[0][0].exito !== undefined) {
						response.json(reply.ok(results[0][0].exito));
					} else {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					}
				} else {
					response.json(reply.error("Error al crear el nuevo paciente."));
				}
			}
			connection.end();
		});
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function upPaciente(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;
		var nombre = JSON.parse(request.body.arg).nombres;
		var primer_apellido = JSON.parse(request.body.arg).apellidoPA;
		var segundo_apellido = JSON.parse(request.body.arg).apellidoMA;
		var prevision_id = JSON.parse(request.body.arg).prevision;
		var telefono = JSON.parse(request.body.arg).fono;
		var movil = JSON.parse(request.body.arg).movil;
		var email = JSON.parse(request.body.arg).correo;
		var direccion = JSON.parse(request.body.arg).direccion;
		var fecha_nacimiento = JSON.parse(request.body.arg).fec_nac_glosa;
		var estado = JSON.parse(request.body.arg).estado;
		var actualizado_por = JSON.parse(request.body.arg).creado_por;

		connection.query('CALL sp_actualizar_paciente(?,?,?,?,?,?,?,?,?,?,?,?)', [rut, nombre, primer_apellido, segundo_apellido, prevision_id, telefono, movil, email, direccion, fecha_nacimiento, estado, actualizado_por], function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error));
			} else {
				if (results.length != 0) {
					if (results[0][0].exito !== undefined) {
						response.json(reply.ok(results[0][0].exito));
					} else {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					}
				} else {
					response.json(reply.error("Error al editar el paciente: [" + rut + "]"));
				}
			}
			connection.end();
		});
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function deletePaciente(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		var rut = JSON.parse(request.body.arg).rut;
		connection.query('CALL sp_eliminar_paciente(?)', [rut], function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error));
			} else {
				if (results.length != 0) {
					if (results[0][0].exito !== undefined) {
						response.json(reply.ok(results[0][0].exito));
					} else {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					}
				} else {
					response.json(reply.error("Error al eliminar el paciente: [" + rut + "]"));
				}
			}
			connection.end();
		});
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

module.exports = {
	getPacientes,
	newPaciente,
	deletePaciente,
	getPaciente,
	upPaciente
};
