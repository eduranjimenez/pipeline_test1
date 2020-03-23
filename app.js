'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const authRoutes = require('./routes/auth_routes');
const apiRoutes = require('./routes/api_routes');
const apiLogger = require('./middlewares/authenticated');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/auth', authRoutes);
app.use(apiLogger.logger);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('_OK');
})

module.exports = app;