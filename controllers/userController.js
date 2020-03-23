'use strict'

const expor = module.exports = {};

const users = [
	{
		username: 'admin'
		,password: 'admin'
	}
	,{
		username: 'bienvenido'
		,password: '123456'
	}
	,{
		username: 'antonio'
		,password: '654321'
	}
];

expor.getUsers = function(req,res){
	res.send({result: users});
}


