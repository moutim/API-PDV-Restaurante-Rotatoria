const express = require('express');

const routes = express.Router();

const controller = require('../controllers/vendaController');

routes.get('/', controller.getVendas);

module.exports = routes;
