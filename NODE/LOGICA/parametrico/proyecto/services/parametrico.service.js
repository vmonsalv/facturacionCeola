'use strict'

var mysql = require('mysql');
var reply = require('../../base/utils/reply');

var invoker = require('../../base/invokers/invoker.invoker');

function getApp(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		connection.query('CALL sp_obtener_app()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function getPrevisiones(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_previsiones()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function getMenusApp(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		
		connection.query('CALL sp_obtener_menus(?)',[JSON.parse(request.body.arg).app], function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function updateEstadoApp(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		
		connection.query('CALL sp_actualizar_estadoApp(?,?)',[JSON.parse(request.body.arg).estado, JSON.parse(request.body.arg).idApp], function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if (results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined) {
						response.status(200).json(reply.ok(results[0][0]));
					} else {response.status(200).json(reply.ok(results[0]));}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});

	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function updateEstadoMenu(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});
		
		connection.query('CALL sp_actualizar_estadoMenu(?,?,?)',[JSON.parse(request.body.arg).estado, JSON.parse(request.body.arg).idMenu, JSON.parse(request.body.arg).idApp], function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if (results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined) {
						response.status(200).json(reply.ok(results[0][0]));
					} else {response.status(200).json(reply.ok(results[0]));}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});

	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

/* protesis */
function getProtesis(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_protesis()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function newProtesis(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var codigo = JSON.parse(request.body.arg).codigo;
		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var valor_dipreca = JSON.parse(request.body.arg).valor_dipreca;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_ingresar_protesis(?,?,?,?,?)', [codigo,nombre,valor,valor_dipreca,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al crear nueva protesis."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function deleteProtesis(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_protesis(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar protesis: [" + id + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function updateProtesis(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;
		var codigo = JSON.parse(request.body.arg).codigo;
		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var valor_dipreca = JSON.parse(request.body.arg).valor_dipreca;
		var estado = JSON.parse(request.body.arg).estado;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_actualizar_protesis(?,?,?,?,?,?,?)', [id,codigo,nombre,valor,valor_dipreca,estado,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al editar protesis: [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function getProte(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_prote(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al obtener protesis [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

/* insumos */
function getInsumos(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_insumos()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function newInsumo(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_ingresar_insumo(?,?,?)', [nombre,valor,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al crear nuevo insumo."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function deleteInsumo(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_insumo(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar insumo: [" + id + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function updateInsumo(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;
		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var estado = JSON.parse(request.body.arg).estado;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_actualizar_insumo(?,?,?,?,?)', [id,nombre,valor,estado,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al editar insumo: [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function getInsumo(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_insumo(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al obtener insumo [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

/* medicamentos */
function getMedicamentos(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_medicamentos()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function newMedicamento(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_ingresar_medicamento(?,?,?)', [nombre,valor,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al crear nuevo medicamento."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function deleteMedicamento(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_medicamento(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar medicamento: [" + id + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function updateMedicamento(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;
		var nombre = JSON.parse(request.body.arg).nombre;
		var valor = JSON.parse(request.body.arg).valor;
		var estado = JSON.parse(request.body.arg).estado;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_actualizar_medicamento(?,?,?,?,?)', [id,nombre,valor,estado,rut], function (error, results, fields) {
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
					response.json(reply.error("Error al editar medicamento: [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function getMedicamento(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_medicamento(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al obtener medicamento [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

/* Pabellón */
function getPabellones(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_pabellones()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

function newPabellon(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var numero = JSON.parse(request.body.arg).numero;
		var valor_fonasa = JSON.parse(request.body.arg).valor_fonasa;
		var valor_bono_fonasa = JSON.parse(request.body.arg).valor_bono_fonasa;
		var valor_fonasa_a_pagar_paciente = JSON.parse(request.body.arg).valor_fonasa_a_pagar_paciente;
		var valor_isapre = JSON.parse(request.body.arg).valor_isapre;
		var valor_particular = JSON.parse(request.body.arg).valor_particular;
		var valor_capredena = JSON.parse(request.body.arg).valor_capredena;
		var valor_dipreca = JSON.parse(request.body.arg).valor_dipreca;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_ingresar_pabellon(?,?,?,?,?,?,?,?,?)',
			[numero,
			valor_fonasa,
			valor_bono_fonasa,
			valor_fonasa_a_pagar_paciente,
			valor_isapre,
			valor_particular,
			valor_capredena,
			valor_dipreca,
			rut],
			function (error, results, fields) {
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
						response.json(reply.error("Error al crear nuevo medicamento."));
					}
				}
			}
		);
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function deletePabellon(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_pabellon(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar medicamento: [" + id + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function updatePabellon(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;
		var numero = JSON.parse(request.body.arg).numero;
		var valor_fonasa = JSON.parse(request.body.arg).valor_fonasa;
		var valor_bono_fonasa = JSON.parse(request.body.arg).valor_bono_fonasa;
		var valor_fonasa_a_pagar_paciente = JSON.parse(request.body.arg).valor_fonasa_a_pagar_paciente;
		var valor_isapre = JSON.parse(request.body.arg).valor_isapre;
		var valor_particular = JSON.parse(request.body.arg).valor_particular;
		var valor_capredena = JSON.parse(request.body.arg).valor_capredena;
		var valor_dipreca = JSON.parse(request.body.arg).valor_dipreca;
		var estado = JSON.parse(request.body.arg).estado;
		var rut = JSON.parse(request.body.arg).rut;

		connection.query('CALL sp_actualizar_pabellon(?,?,?,?,?,?,?,?,?,?,?)',
			[id,
			numero,
			valor_fonasa,
			valor_bono_fonasa,
			valor_fonasa_a_pagar_paciente,
			valor_isapre,
			valor_particular,
			valor_capredena,
			valor_dipreca,
			estado,
			rut],
			function (error, results, fields) {
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
						response.json(reply.error("Error al editar medicamento: [" + id + "]"));
					}
				}
			}
		);
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function getPabellon(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_pabellon(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al obtener medicamento [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

/* Equipo medico */
function getEquipoMedico(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		connection.query('CALL sp_obtener_equipo_medico()', function (error, results, fields) {
			if (error) {
				response.status(200).json(reply.fatal(error.message));
			} else {
				if (results.length != 0) {
					if(results[0][0].Level !== undefined || results[0][0].ERR_MSSG !== undefined){
						response.status(200).json(reply.ok(results[0][0]));
					} else {
						response.status(200).json(reply.ok(results[0]));
					}
				} else {
					response.status(200).json(reply.ok(null));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.status(200).json(reply.fatal(e.message));
	}
}

/*function newFuncionarioEM(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});


		connection.query('CALL sp_ingresar_funcionario(?,?,?,?)', [rut, clave_encriptada, email, nombre], function (error, results, fields) {
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
					response.json(reply.error("Error al crear nuevo funcionario."));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function deleteFuncionarioEM(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_eliminar_funcionario(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al eliminar funcionario: [" + id + "]"));
				}
			}
			connection.end();
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function updateFuncionarioEM(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});



		connection.query('CALL sp_actualizar_funcionario(?,?,?,?)', [rut, clave_encriptada, email, nombre], function (error, results, fields) {
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
					response.json(reply.error("Error al editar funcionario: [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}

function getFuncionarioEM(request, response) {
	try {
		var connection = mysql.createConnection({
			host: global.config.ds_ceola2017.server,
			user: global.config.ds_ceola2017.user,
			password: global.config.ds_ceola2017.password,
			database: global.config.ds_ceola2017.database
		});

		var id = JSON.parse(request.body.arg).id;

		connection.query('CALL sp_obtener_funcionario(?)', [id], function (error, results, fields) {
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
					response.json(reply.error("Error al obtener funcionario [" + id + "]"));
				}
			}
		});
		connection.end();
	} catch (e) {
		response.json(reply.fatal(e.message));
	}
}
*/
module.exports = {
	getApp,
	getPrevisiones,
	getMenusApp,
	updateEstadoApp,
	updateEstadoMenu,
	getProtesis,
	newProtesis,
	deleteProtesis,
	updateProtesis,
	getProte,
	getInsumos,
	newInsumo,
	deleteInsumo,
	getInsumo,
	updateInsumo,
	getMedicamentos,
	newMedicamento,
	deleteMedicamento,
	updateMedicamento,
	getPabellones,
	newPabellon,
	deletePabellon,
	updatePabellon,
	getPabellon,
	getEquipoMedico
	/*newFuncionarioEM,
	deleteFuncionarioEM,
	updateFuncionarioEM,
	getFuncionarioEM*/
};
