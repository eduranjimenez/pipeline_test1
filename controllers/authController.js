'use strict'

const request = require('request');
const authService = require('../services/authservices');
const expor = module.exports = {};

const users = [
	{
		_id: 1
		,username: 'admin'
		,password: 'admin'
	}
	,{
		_id: 2
		,username: 'bienvenido'
		,password: '123456'
	}
	,{
		_id: 3
		,username: 'edgar'
		,password: '654321'
	}
];

expor.login = function(req,res){
	users.forEach((user) => {
		if(user.username == req.body.username && user.password == req.body.password){
			return res
        	.status(200)
            .send({token: authService.createToken(user)});
		}
	});
}