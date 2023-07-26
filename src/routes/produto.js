const express = require('express');

const routes = express.Router();

const controller = require('../controllers/produtoController');

const middlewares = require('../middlewares');

routes.get('/', controller.getProdutos);

routes.post('/', middlewares.verifyCreateProduto, controller.createProduto);

routes.put('/:id', middlewares.verifyCreateProduto, controller.updateProduto);

module.exports = routes;
