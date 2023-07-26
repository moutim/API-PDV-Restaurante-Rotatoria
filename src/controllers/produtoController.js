const { StatusCodes } = require('http-status-codes');

const service = require('../service/produtoService');

const getProdutos = async (req, res) => {
  const produtos = await service.getProdutos();

  res.status(StatusCodes.OK).json(produtos);
};

const createProduto = async (req, res) => {
  const result = await service.createProduto(req.body);

  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getProdutos,
  createProduto,
};
