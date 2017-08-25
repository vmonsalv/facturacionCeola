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


module.exports = {
	getApp,
	getPrevisiones,
	getMenusApp,
	updateEstadoApp,
	updateEstadoMenu,
	getProtesis,
	getInsumos,
	getMedicamentos,
	getEquipoMedico
};
