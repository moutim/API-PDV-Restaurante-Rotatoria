const express = require('express');

const routes = express.Router();

routes.use('/cliente', require('./cliente'));

module.exports = routes;
