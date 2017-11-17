'use strict'

var reply = require('../../base/utils/reply');
var jsreport = require('jsreport');

var codificacion = `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`;

var utils = require('../utils/utils.js');

function getPresupuestoPaciente(request, response) {
    try {
        var args = JSON.parse(request.body.arg === undefined ? "{}" : request.body.arg);
        var msgError = "";

        if (!args.hasOwnProperty("presupuesto")) {
            msgError += "No se ha encontrado el parametro presupuesto.";
        }
        if (!args.hasOwnProperty("paciente")) {
            msgError += "No se ha encontrado el parametro paciente.";
        }
        if (!args.hasOwnProperty("sucursal")) {
            msgError += "No se ha encontrado el parametro sucursal.";
        }

        if (msgError == "") {

            jsreport.render(
                {
                    template: {
                        content: "<h1>HOLA</h1>",
                        engine: 'jsrender',
                        recipe: 'phantom-pdf',
                        phantom: {
                            format: 'Letter',
                            header: `<span style="float:right;zoom:0.75;">Viña del Mar, ` + utils.formatoFecha(new Date, "dddd dd mmmm yyyy") + `</span>`,
                            footer: `
                        <div style="zoom:0.75;"><center>
                                Centro Oftalmológico Láser, Viña del Mar<br/>
                                Tel: (32) 2450350 <span style="padding-left:20px;">Correo: ayudavina@centrolaser.cl</span><br/>
                                Rut: 76.117.597-1
                        </center>
                        </div>`,
                            footerHeight: '130px'
                        }
                    }
                }
            ).then(function (out) {
                response.send(out.content);
            }).catch(function (e) {
                response.json(reply.fatal(e));
            });
        } else {
            response.json(reply.error(msgError));
        }
    } catch (e) {
        response.json(reply.fatal(e));
    }
}

module.exports = {
    getPresupuestoPaciente
};
