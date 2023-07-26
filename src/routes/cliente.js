const express = require('express');

const routes = express.Router();

const controller = require('../controllers/clienteController');

const middlewares = require('../middlewares');

routes.get('/', controller.getClientes);

routes.get('/:telefone', controller.getCliente);

routes.get('/:id/vendas', controller.getClienteVendas);

routes.post('/', middlewares.verifyCreateCliente, controller.createCliente);

routes.put('/:id', middlewares.verifyCreateCliente, controller.updateCliente);

module.exports = routes;
