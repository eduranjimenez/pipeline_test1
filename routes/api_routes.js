'use strict'

const express = require('express');
const userController = require('../controllers/userController');
const apiRouter = express.Router();

apiRouter.get('/users/find', userController.getUsers);

module.exports = apiRouter;