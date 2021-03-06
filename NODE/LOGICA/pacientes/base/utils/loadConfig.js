'use strict'

var invoker = require('../invokers/invoker.invoker');

var serverUrl = global.config.url;


function loadConfiguration() {
    var usaDB = global.config.hasOwnProperty("usaDatabase") ?  global.config.usaDatabase : false;

    if (usaDB) {
        invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": "database"}, function(data) {
            if (data.status=="OK") {
                global.config.database = {
                    "host": data.data.host,
                    "port": data.data.port,
                    "path": data.data.path
                };

                
                
                var serverDB = global.config.database;
                var maxDs = global.config.datasources.length;
                var contDs = 0;

                

                invoker.invokeService(serverDB.host, serverDB.port, serverDB.path, "getConfigDatabase", {"name": global.config.datasources[contDs].name}, function callback(data) {
                    if (data.status=="OK") {
                        var nameDs = "ds_" + data.data.code;

                        var ds = {};
                        ds.server = data.data.server;
                        ds.user = data.data.user;
                        ds.password = data.data.password;
                        ds.database = data.data.database;

                        global.config[nameDs] = ds;
                        //console.log(ds);
                        
                        if (++contDs!=maxDs) {
                            invoker.invokeService(serverDB.host, serverDB.port, serverDB.path, "getConfigDatabase", {"name": global.config.datasources[contDs].name}, callback);
                        }
                    } else {
                        console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);

                        if (++contDs!=maxDs) {
                            invoker.invokeService(serverDB.host, serverDB.port, serverDB.path, "getConfigDatabase", {"name": global.config.datasources[contDs].name}, callback);
                        }
                    }
                });
            } else {
                console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);
            }
        });
    }

    var usaServer = global.config.hasOwnProperty("services");

    if (usaServer) {
        var maxServ = global.config.services.length;
        var contServ = 0;

        invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": global.config.services[contServ].name}, function callback(data) {
            if (data.status == "OK") {
                var nameServ = "serv_" + data.data.code;

                var serv = {};
                serv.host = data.data.host;
                serv.port = data.data.port;
                serv.path = data.data.path;

                global.config[nameServ] = serv;

                if (++contServ!=maxServ) {
                    invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": global.config.services[contServ].name}, callback);
                }
            } else {
                //console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);

                if (++contServ!=maxServ) {
                    invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": global.config.services[contServ].name}, callback);
                }
            }
        });
    }

    var usaParams = global.config.hasOwnProperty("params") && global.config.params.length > 0;

    if (usaParams) {
        invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": "param"}, function callback(data) {
            if (data.status=="OK") {
                var nameServ = "serv_" + data.data.code;
                
                var serv = {};
                serv.host = data.data.host;
                serv.port = data.data.port;
                serv.path = data.data.path;

                global.config[nameServ] = serv;


                var maxParams = global.config.params.length;
                var contParam = 0;

                var parParams = {
                    "app": global.config.params[contParam].app,
                    "params": global.config.params[contParam].params
                };

                invoker.invokeService(serv.host, serv.port, serv.path, "getParams", parParams, function callback(data) {
                    if (data.status=="OK") {
                        for (var i=0; i<data.data.length; i++) {
                            var nameParam = "param_" + global.config.params[contParam].app + "_" + data.data[i].code;

                            global.config[nameParam] = data.data[i].value;
                        }

                        if (++contParam!=maxParams) {
                            var parParams = {
                                "app": global.config.params[contParam].app,
                                "params": global.config.params[contParam].params
                            };

                            invoker.invokeService(serv.host, serv.port, serv.path, "getParams", parParams, callback);
                        }
                    } else {
                        console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);

                        if (++contParam!=maxParams) {
                            var parParams = {
                                "app": global.config.params[contParam].app,
                                "params": global.config.params[contParam].params
                            };

                            invoker.invokeService(serv.host, serv.port, serv.path, "getParams", parParams, callback);
                        }
                    }
                });
            } else {
                console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);
            }
        });
    }

    var usaCrypter = global.config.hasOwnProperty("usaCrypter") ?  global.config.usaCrypter : false;

    if (usaCrypter) {
        invoker.invokeService(serverUrl.host, serverUrl.port, serverUrl.path, serverUrl.serviceName, {"name": "crypter"}, function callback(data) {
            if (data.status=="OK") {
                var nameServ = "serv_" + data.data.code;
                
                var serv = {};
                serv.host = data.data.host;
                serv.port = data.data.port;
                serv.path = data.data.path;

                global.config[nameServ] = serv;
            } else {
                console.error(`ERROR cargando configuración - [Type: ${data.error.type}] - [Level: ${data.error.level}] [Msg: ${data.error.message}]`);
            }
        });
    }
}


module.exports = {
    loadConfiguration
};
