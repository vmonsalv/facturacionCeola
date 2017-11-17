'use strict'

/* :::::::::::::::::::: VALIDACIONES :::::::::::::::::::: */
/**
 * Valida datos ingresado por el usuario
 * Entrada: tipo (rut, email, generico), dato
 * Salida: true o false
 */
function validarCampo(dato, tipo = null) {
    if (tipo == 'rut') {
        dato = dato.trim();
        if (dato.length > 0) {
            return validarRut(dato);
        } else {
            return false;
        }
    } else if (tipo == 'email') {
        /*if (filter_var(dato, FILTER_VALIDATE_EMAIL)) {return true;
        } else {
            return false;
        }*/
    } else {
        dato = dato.trim();
        if (dato.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Valida el rut
 * Entrada: rut
 * Salida: true o false
 */

function validarRut(rut) {
    var rut = rut.replace(/[^k0-9]/gi, "");

    if (rut.length > 0) {
        var dv = rut.substr(-1);
        var numero = rut.substr(0, rut.length - 1);
        var i = 2;
        var suma = 0;

        for (var x = numero.length - 1; x >= 0; x--) {
            if (i == 8) {
                i = 2;
            }

            suma += rut[x] * i;
            ++i;
        }

        var dvr = 11 - (suma % 11);

        if (dvr == 11) {
            dvr = 0;
        }

        if (dvr == 10) {
            dvr = 'K';
        }

        if (dvr == dv.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

module.exports = {
    validarCampo
};