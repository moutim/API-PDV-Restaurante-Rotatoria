const { StatusCodes } = require('http-status-codes');

const service = require('../service/vendaService');

const getVendas = async (req, res) => {
  const vendas = await service.getVendas();

  res.status(StatusCodes.OK).json(vendas);
};

module.exports = {
  getVendas,
};
