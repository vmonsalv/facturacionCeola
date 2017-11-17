'use strict'

const status_ok = "OK";
const status_error = "ERROR";

const type_error = "ERROR";
const type_fatal = "FATAL";

var config = require('../../config');


function ok(value) {
    if (value != undefined && value != null) {
        return createResp(status_ok, null, value);
    } else {
        return createResp(status_ok);
    }
}

function error(error) {
    if (error instanceof Error) {
        return createResp(status_error, error.message, null, type_error, config.app.level, error.stack);
    } else {
        return createResp(status_error, error, null, type_error, config.app.level);
    }
}

function fatal(error) {
    if (error instanceof Error) {
        return createResp(status_error, error.message, null, type_fatal, config.app.level, error.stack);
    } else {
        return createResp(status_error, error, null, type_fatal, config.app.level);
    }
}

function createResp(status, message, value, type, level, trace) {
    var resp = {
        "status": status
    };

    if (value != undefined && value != null) {
        resp.data = JSON.parse(JSON.stringify(value));
    }

    if (status == status_error) {
        resp.error = {
            "type": type,
            "level": level,
            "message": message,
            "trace": (trace==undefined ? "" : (trace instanceof Object ? trace : trace.split('\n')))
        }
    }

    return resp;
}

function throwsError(error) {
    return createResp(status_error, error.message, null, error.type, error.level, error.trace);
}


module.exports = {
    ok,
    error,
    fatal,
    throwsError
};
