'use strict'

var jwt = require('jsonwebtoken');


module.exports = function(token, callback) {
    jwt.verify(token, global.config.param_base_jwt_password, function(err, decoded) {
        if (err) {
            callback(null, err.message);
        } else {
            callback(decoded.data, null);
        }
    });
};
