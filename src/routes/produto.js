const express = require('express');

const routes = express.Router();

const controller = require('../controllers/produtoController');

routes.get('/', controller.getProdutos);

module.exports = routes;
