'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');

const expor = module.exports = {};


expor.logger = function (req, res, next) {
    if(!req.headers.token) {
        return res
          .status(403)
          .send({message: "Tu petición no tiene cabecera de autorización"});
    }
    var token = req.headers.token;
    var payload = jwt.decode(token, config.TOKEN_SECRET);

    if(payload.exp <= moment().unix()) {
        return res
            .status(401)
           .send({message: "El token ha expirado"});
     }
     console.log(payload);
     req.user = payload.sub;
     next();
    // console.log('LOGGED');
    // console.log(req.headers.token);
    // next();
};
