'use strict'

var fs = require("fs");
var reply = require('../../base/utils/reply');
var readJson = require('../../base/utils/readJson');


function getParam(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);
        var msgError = "";

        if (!args.hasOwnProperty("app")) {
            msgError = 'No se ha encontrado valor para el parámetro app.';
        }
        if (!args.hasOwnProperty("code")) {
            if (msgError!="") msgError+= ' ';
            msgError+= 'No se ha encontrado valor para el parámetro code.';
        }

        if (msgError=="") {
            var app = args.app;
            var code = args.code;
            var value = "";

            fs.exists("./proyecto/models/" + app + ".json", (exists) => {
                if (exists) {
                    readJson.readJson("./proyecto/models/" + app + ".json", function(dataApp) {
                        var params = dataApp.params;

                        for (var i=0; i<params.length; i++) {
                            if (params[i].code===code) {
                                value = params[i].value;
                                break;
                            }
                        }
                    });

                    var retParam = {
                        "code": code,
                        "value": value
                    };

                    if (value!="") {
                        response.status(200).json(reply.ok(retParam));
                    } else {
                        response.status(200).json(reply.error("No se ha encontrado el valor del parámetro '" + code + "'"));
                    }
                } else {
                    response.status(200).json(reply.error("No se ha encontrado archivo de parámetros para aplicación '" + app + "'"));
                }
            });
        } else {
            response.status(200).json(reply.error(msgError));
        }
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }

}

function getParams(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);
        var msgError = "";

        if (!args.hasOwnProperty("app")) {
            msgError = 'No se ha encontrado valor para el parámetro app.';
        }
        if (!args.hasOwnProperty("params")) {
            if (msgError!="") msgError+= ' ';
            msgError+= 'No se ha encontrado valor para el parámetro params.';
        } else if (args.params.length==0) {
            if (msgError!="") msgError+= ' ';
            msgError+= 'No se han encontrado valores para el parámetro params.';
        }

        if (msgError=="") {
            var app = args.app;
            var codeParams = args.params;

            fs.exists("./proyecto/models/" + app + ".json", (exists) => {
                if (exists) {
                    var retParams = [];

                    readJson.readJson("./proyecto/models/" + app + ".json", function(dataApp) {
                        var params = dataApp.params;
                        var foundParam = false;

                        for (var j=0; j<codeParams.length; j++) {
                            for (var i=0; i<params.length; i++) {
                                if (params[i].code===codeParams[j].code) {
                                    retParams.push({"code": params[i].code, "value": params[i].value});
                                    foundParam = true;
                                    break;
                                }
                            }

                            if (!foundParam) {
                                if (msgError!="") msgError+= ' ';
                                msgError+= 'No se ha encontrado el valor del parámetro ' + codeParams[j].code + '.';
                            }

                            foundParam = false;
                        }
                    });

                    console.log(msgError);
                    if (msgError!="") {
                        response.status(200).json(reply.error(msgError));
                    } else {
                        response.status(200).json(reply.ok(retParams));
                    }
                } else {
                    response.status(200).json(reply.error("No se ha encontrado archivo de parámetros para aplicación '" + app + "'"));
                }
            });
        } else {
            response.status(200).json(reply.error(msgError));
        }
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

function getAllParams(request, response) {
    try {
        var args = JSON.parse(request.body.arg===undefined ? "{}" : request.body.arg);
        var msgError = "";

        if (!args.hasOwnProperty("app")) {
            msgError = 'No se ha encontrado valor para el parámetro app.';
        }
        
        if (msgError=="") {
            var app = args.app;
            
            fs.exists("./proyecto/models/" + app + ".json", (exists) => {
                if (exists) {
                    var retParams = [];

                    readJson.readJson("./proyecto/models/" + app + ".json", function(dataApp) {
                        var params = dataApp.params;
                        var foundParam = false;
			
			   for (var i=0; i<params.length; i++) {
					retParams.push({"code": params[i].code, "value": params[i].value});
                                    foundParam = true;
                            }
                    });

                    console.log(msgError);
                    if (msgError!="") {
                        response.status(200).json(reply.error(msgError));
                    } else {
                        response.status(200).json(reply.ok(retParams));
                    }
                } else {
                    response.status(200).json(reply.error("No se ha encontrado archivo de parámetros para aplicación '" + app + "'"));
                }
            });
        } else {
            response.status(200).json(reply.error(msgError));
        }
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}


module.exports = {
    getParam,
    getParams,
    getAllParams
};
