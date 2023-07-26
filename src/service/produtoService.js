// const { StatusCodes } = require('http-status-codes');
const { Produtos } = require('../database/models');

const getProdutos = async () => {
  const produtos = await Produtos.findAll();

  return produtos;
};

module.exports = {
  getProdutos,
};
