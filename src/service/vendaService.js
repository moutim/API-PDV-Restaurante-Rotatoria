const {
  Vendas, Clientes, VendasProdutos, PagamentoTipos,
} = require('../database/models');

const getVendas = async () => {
  const vendas = await Vendas.findAll({
    include: [
      { model: PagamentoTipos, as: 'pagamento', attributes: ['tipo'] },
      { model: Clientes, as: 'cliente', attributes: ['nome'] },
      { model: VendasProdutos, as: 'produtos' },
    ],
    attributes: { exclude: 'clienteId' },
  });

  return vendas;
};

const createVendas = async (info) => {
  const result = info;
  return result;
};

module.exports = {
  getVendas,
  createVendas,
};
