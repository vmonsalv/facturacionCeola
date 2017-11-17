'use strict'

var reply = require('../../base/utils/reply');
var baseServiceCaller = require('./baseServiceCaller.service');
var crypter = require('../utils/crypter');

function discoveryTokenData(request, response) {
    try {
        var dataToken = JSON.parse(crypter.decrypt(JSON.parse(request.body.arg).identify));
        response.status(200).json(reply.ok(dataToken));
    } catch (e) {
        response.status(200).json(reply.fatal(e.message));
    }
}

module.exports = {
    discoveryTokenData
};
