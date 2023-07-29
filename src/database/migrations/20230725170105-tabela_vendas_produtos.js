'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('VendasProdutos', {
      vendaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Vendas',
          key: 'vendaId'
        },
        primaryKey: true
      },
      produtoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Produtos',
          key: 'produtoId'
        },
        primaryKey: true
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('VendasProdutos')
  }
};
