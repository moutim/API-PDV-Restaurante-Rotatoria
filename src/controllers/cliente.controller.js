const { StatusCodes } = require('http-status-codes');
const service = require('../service/cliente.service');

const getClientes = async (req, res) => {
  const clientes = await service.getClientes();

  res.status(StatusCodes.OK).json(clientes);
};

const getCliente = async (req, res) => {
  const cliente = await service.getCliente(req.params.telefone);

  res.status(StatusCodes.OK).json(cliente);
};

module.exports = {
  getClientes,
  getCliente,
};
