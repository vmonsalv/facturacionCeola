'use strict'

var fetch = require('node-fetch');

module.exports = function(url, callback) {
    fetch(url)
        .then(res => res.buffer())
        .then(buffer => callback(buffer, null))
    .catch(function(err) {
        callback(null, error);
    });
};
