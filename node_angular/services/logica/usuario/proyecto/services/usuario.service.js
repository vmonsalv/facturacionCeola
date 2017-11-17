'use strict'

var mysql = require('mysql');

var reply = require('../../base/utils/reply');
var invoker = require('../../base/invokers/invoker.invoker');


function login(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;
		var password = JSON.parse(request.body.arg).password;

		connection.query('SELECT id, rut, nombre, primer_apellido, segundo_apellido, configuracion, estado, superadmin FROM usuario WHERE rut = ? AND clave_encriptada = ?', [rut, password], function (error, usuario, fields) {
			if (error) {
				response.json(reply.fatal(error));
			} else {
				if (usuario.length != 0) {
					if (usuario[0].estado == 1) {
						connection.query('SELECT aplicacion_id, rol_id FROM rol_asignado WHERE usuario_id = ?', [usuario[0].id], function (error, permisos, fields) {
							if (error) {
								response.json(reply.fatal(error));
							} else {
								if (permisos != undefined) {
									usuario[0].permisos = permisos;
									response.json(reply.ok(usuario[0]));
								} else {
									response.json(reply.error("No se han encontrado los permisos para el usuario: [" + usuario[0].rut + "]"));
								}
							}
						});
					} else {
						response.json(reply.ok({error: "INACTIVO"}));
					}
				} else {
					response.json(reply.ok({error: "NO EXISTE"}));
				}
			}
			connection.end();
		});
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function getUsuarios(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_usuarios()', function (error, results, fields) {
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
					response.json(reply.ok("Error al obtener los usuarios."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function newUsuario(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;
		var clave_encriptada = JSON.parse(request.body.arg).password;
		var email = JSON.parse(request.body.arg).correo;
		var nombre = JSON.parse(request.body.arg).nombres;
		var primer_apellido = JSON.parse(request.body.arg).apellidoPA;
		var segundo_apellido = JSON.parse(request.body.arg).apellidoMA;
		var superadmin = JSON.parse(request.body.arg).superadmin;
		var creado_por = JSON.parse(request.body.arg).creado_por;

		connection.query('CALL sp_ingresar_usuario(?,?,?,?,?,?,?,?)', [rut, clave_encriptada, email, nombre, primer_apellido, segundo_apellido, superadmin, creado_por], function (error, results, fields) {
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
					response.json(reply.error("Error al crear el nuevo usuario."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function upUsuario(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;
		var clave_encriptada = JSON.parse(request.body.arg).password;
		var email = JSON.parse(request.body.arg).correo;
		var nombre = JSON.parse(request.body.arg).nombres;
		var primer_apellido = JSON.parse(request.body.arg).apellidoPA;
		var segundo_apellido = JSON.parse(request.body.arg).apellidoMA;
		var superadmin = JSON.parse(request.body.arg).superadmin;
		var estado = JSON.parse(request.body.arg).estado;
		var actualizado_por = JSON.parse(request.body.arg).creado_por;

		connection.query('CALL sp_actualizar_usuario(?,?,?,?,?,?,?,?,?)', [rut, clave_encriptada, email, nombre, primer_apellido, segundo_apellido, superadmin, estado, actualizado_por], function (error, results, fields) {
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
					response.json(reply.error("Error al editar el usuario: [" + rut + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function getUsuario(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_obtener_usuario(?)', [rut], function (error, results, fields) {
			if (error) {
				response.json(reply.fatal(error.message));
			} else {
				if (results[0].length != 0) {
					if (results[0][0].hasOwnProperty("ERR_MSSG")) {
						response.json(reply.ok({ error: results[0][0].ERR_MSSG }));
					} else {
						response.json(reply.ok(results[0][0]));
					}
				} else {
					response.json(reply.error("Error al obtener el usuario [" + rut + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function deleteUsuario(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		var rut = JSON.parse(request.body.arg).rut;
		connection.query('CALL sp_eliminar_usuario(?)', [rut], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar el usuario: [" + rut + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function asignarRoles(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		var rut = JSON.parse(request.body.arg).rut;
		var app_id = JSON.parse(request.body.arg).app_id;
		var rol_id = JSON.parse(request.body.arg).rol_id;
		var creado_por = JSON.parse(request.body.arg).creado_por;

		connection.query('CALL sp_asignar_roles(?,?,?,?)', [rut, app_id, rol_id, creado_por], function (error, results, fields) {
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
					response.json(reply.error("Error al asignar roles al usuario: [" + rut + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

function getRolesUsuario(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_obtener_roles_usuario(?)', [rut], function (error, results, fields) {
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
					response.json(reply.ok("Error al obtener los roles del usuario [" + rut + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e));
	}
}

module.exports = {
	login,
	getUsuarios,
	newUsuario,
	upUsuario,
	getUsuario,
	deleteUsuario,
	asignarRoles,
	getRolesUsuario
};
