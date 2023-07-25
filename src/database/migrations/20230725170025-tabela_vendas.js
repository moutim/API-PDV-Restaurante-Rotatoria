'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      vendaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'clienteId'
        }
      },
      pagamentoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PagamentoTipo',
          key: 'pagamentoId'
        }
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas')
  }
};
