const { StatusCodes } = require('http-status-codes');
const { Clientes, Vendas, PagamentoTipos } = require('../database/models');

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

const getClienteVendas = async (id) => {
  const clienteVendas = await Vendas.findAll({
    where: { clienteId: id },
    include: [
      { model: PagamentoTipos, as: 'pagamento' },
    ],
  });

  if (!clienteVendas) {
    throw Object({ status: StatusCodes.NOT_FOUND, message: 'Ainda nao ha vendas realizadas com esse cliente' });
  }

  return clienteVendas;
};

const createCliente = async (info) => {
  try {
    const result = await Clientes.create({ ...info });
    return result;
  } catch (e) {
    throw Object({ status: StatusCodes.BAD_REQUEST, message: e.message });
  }
};

module.exports = {
  getClienteVendas,
  getClientes,
  getCliente,
  createCliente,
};
