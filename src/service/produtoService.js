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

const updateProduto = async (info, id) => {
  try {
    const result = await Produtos.update({ ...info }, { where: { produtoId: id } });

    if (result[0]) return { message: 'Informacoes atualizadas com sucesso!' };

    throw Object({ status: StatusCodes.INTERNAL_SERVER_ERROR, message: 'Nao foi possivel atualizar as informacoes' });
  } catch (e) {
    throw Object({ status: StatusCodes.BAD_REQUEST, message: e.message });
  }
};

module.exports = {
  getProdutos,
  createProduto,
  updateProduto,
};
