// const { StatusCodes } = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');
const { Produtos } = require('../database/models');

const getProdutos = async () => {
  const produtos = await Produtos.findAll();

  return produtos;
};

const createProduto = async (info) => {
  try {
    const result = await Produtos.create({ ...info });
    return result;
  } catch (e) {
    throw Object({ status: StatusCodes.BAD_REQUEST, message: e.message });
  }
};

module.exports = {
  getProdutos,
  createProduto,
};
