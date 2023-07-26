const { StatusCodes } = require('http-status-codes');

const service = require('../service/produtoService');

const getProdutos = async (req, res) => {
  const produtos = await service.getProdutos();

  res.status(StatusCodes.OK).json(produtos);
};

module.exports = {
  getProdutos,
};
