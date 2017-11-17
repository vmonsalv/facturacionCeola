'use strict'

var baseServiceCaller = require('../services/baseServiceCaller.service');
var readToken = require('./readToken');
var reply = require('./reply');
var crypter = require('./crypter');


module.exports = function(token, callback) {
    if (token) {
        readToken(token, function(dataToken, error) {
            if (error==null) {
                var usaCrypter = global.config.hasOwnProperty("usaCrypter") ? global.config.usaCrypter : false;

                if (usaCrypter) {
                    baseServiceCaller.decrypt({"data": dataToken}, function(dataDecrypt, error) {
                        if (error==null) {
                            callback(dataDecrypt, null);
                        } else {
                            callback(null, error);
                        }
                    });
                } else {
                    try {
                        callback(JSON.parse(crypter.decrypt(dataToken)), null);
                    } catch(e) {
                        callback(null, reply.fatal(e).error);
                    }
                }
            } else {
                error.message = "tokenError: " + error.message;
                callback(null, reply.fatal(error).error);
            }
        });
    } else {
        callback(null, reply.fatal("tokenError: no encontrado").error);
    }
};
