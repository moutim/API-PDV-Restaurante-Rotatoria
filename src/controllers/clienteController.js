const { StatusCodes } = require('http-status-codes');
const service = require('../service/clienteService');

const getClientes = async (req, res) => {
  const clientes = await service.getClientes();

  res.status(StatusCodes.OK).json(clientes);
};

const getCliente = async (req, res) => {
  const cliente = await service.getCliente(req.params.telefone);

  res.status(StatusCodes.OK).json(cliente);
};

const getClienteVendas = async (req, res) => {
  const clienteVendas = await service.getClienteVendas(req.params.id);

  res.status(StatusCodes.OK).json(clienteVendas);
};

const createCliente = async (req, res) => {
  const result = await service.createCliente(req.body);

  res.status(StatusCodes.CREATED).json(result);
};

module.exports = {
  getClientes,
  getCliente,
  getClienteVendas,
  createCliente,
};
