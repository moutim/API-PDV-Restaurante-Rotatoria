const express = require('express');

const routes = express.Router();

const controller = require('../controllers/clienteController');

routes.get('/', controller.getClientes);

routes.get('/:telefone', controller.getCliente);

routes.get('/:id/vendas', controller.getClienteVendas);

routes.post('/', controller.createCliente);

module.exports = routes;
