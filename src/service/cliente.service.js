const { StatusCodes } = require('http-status-codes');
const { Clientes } = require('../database/models');

const getClientes = async () => {
  const clientes = await Clientes.findAll();

  if (!clientes) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: 'Nao existem clientes cadastrados' });
  }

  return clientes;
};

const getCliente = async (telefone) => {
  const cliente = await Clientes.findOne({ where: { telefone } });

  if (!cliente) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: 'Nao existe cliente cadastrado com esse numero' });
  }

  return cliente;
};

module.exports = {
  getClientes,
  getCliente,
};
