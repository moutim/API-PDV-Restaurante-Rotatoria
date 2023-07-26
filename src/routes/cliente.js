const express = require('express');

const routes = express.Router();

const controller = require('../controllers/cliente.controller');

routes.get('/', controller.getClientes);

routes.get('/:telefone', controller.getCliente);

module.exports = routes;
