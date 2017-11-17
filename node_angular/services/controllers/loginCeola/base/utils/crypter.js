'use strict'

var crypto = require('crypto');

function encrypt(text) {
    try {
        var cipher = crypto.createCipher(global.config.param_base_crypter_algorithm, global.config.param_base_crypter_password);
        var crypted = cipher.update(text, 'utf8', 'base64');
        crypted += cipher.final('base64');

        return crypted;
    } catch (e) {
        throw(e);
    }
}

function decrypt(text) {
    try {
        var decipher = crypto.createDecipher(global.config.param_base_crypter_algorithm, global.config.param_base_crypter_password);
        var dec = decipher.update(text, 'base64', 'utf8');
        dec += decipher.final('utf8');

        return dec;
    } catch (e) {
        throw e;
    }
}


module.exports = {
    encrypt,
    decrypt
};
