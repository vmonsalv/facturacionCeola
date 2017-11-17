'use strict'

var invoker = require('../invokers/invoker.invoker');


function getMenus(dataIN, callback) {
    var servMenu = global.config.serv_menu;

    invoker.invokeService(servMenu, "getMenus", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

function getModulos(dataIN, callback) {
    var servMenu = global.config.serv_menu;

    invoker.invokeService(servMenu, "getModulos", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

function sendMail(dataIN, callback) {
    var servEmail = global.config.serv_email;

    invoker.invokeService(servEmail, "sendMail", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

function encrypt(dataIN, callback) {
    var servCrypter = global.config.serv_crypter;

    invoker.invokeService(servCrypter, "encrypt", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

function decrypt(dataIN, callback) {
    var servCrypter = global.config.serv_crypter;

    invoker.invokeService(servCrypter, "decrypt", dataIN, function(data, error) {
        if (error==null) {
            callback(data.crypt, null);
        } else {
            callback(null, error);
        }
    });
}

function crypterJava(dataIN, callback) {
    var servCrypterJava = global.config.serv_crypterJava;

    invoker.invokeService(servCrypterJava, dataIN.method, dataIN.data, function(data, error) {
        if (error==null) {
            switch (dataIN.version) {
                case 2:
                    callback(data.Version2, null);
                    break;
                case 4:
                    callback(data.Version4, null);
                    break;
            }
        } else {
            callback(null, error);
        }
    });
}

function saveKeyUser(dataIN, callback) {
    var servRedis = global.config.serv_redis;

    invoker.invokeService(servRedis, "setKey", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}

function getKeyUser(dataIN, callback) {
    var servRedis = global.config.serv_redis;

    invoker.invokeService(servRedis, "getKey", dataIN, function(data, error) {
        if (error==null) {
            callback(data, null);
        } else {
            callback(null, error);
        }
    });
}


module.exports = {
    getMenus,
    getModulos,
    sendMail,
    encrypt,
    decrypt,
    crypterJava,
    saveKeyUser,
    getKeyUser
};
