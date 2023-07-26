const { Vendas, Clientes } = require('../database/models');

const getVendas = async () => {
  const vendas = await Vendas.findAll({
    include: {
      model: Clientes,
      as: 'cliente',
      attributes: ['nome'],
    },
  });

  return vendas;
};

module.exports = {
  getVendas,
};
