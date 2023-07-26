const express = require('express');

const routes = express.Router();

routes.use('/cliente', require('./cliente'));

routes.use('/produto', require('./produto'));

module.exports = routes;
