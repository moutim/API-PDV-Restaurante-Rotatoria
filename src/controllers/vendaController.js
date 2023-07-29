const { StatusCodes } = require('http-status-codes');

const service = require('../service/vendaService');

const getVendas = async (req, res) => {
  const vendas = await service.getVendas();

  res.status(StatusCodes.OK).json(vendas);
};

const createVendas = async (req, res) => {
  const result = await service.createVendas(req.body);

  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getVendas,
  createVendas,
};
