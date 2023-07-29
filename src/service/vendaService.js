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
  const {
    clienteId, pagamentoId, total, produtos,
  } = info;

  try {
    const resultCreateVenda = await Vendas.create({ clienteId, pagamentoId, total });
    const { vendaId } = resultCreateVenda.dataValues;

    produtos.forEach(({ produtoId, quantidade }) => {
      VendasProdutos.create({ vendaId, produtoId, quantidade });
    });

    return { vendaId, message: 'Venda criada com sucesso!' };
  } catch (e) {
    throw Object(e);
  }
};

module.exports = {
  getVendas,
  createVendas,
};
