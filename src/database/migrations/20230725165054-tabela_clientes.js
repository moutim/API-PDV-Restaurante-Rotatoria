'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      clienteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      enderecoNumero: {
        allowNull: false,
        type: Sequelize.STRING
      },
      totalPedidos: {
        type: Sequelize.INTEGER,
      },
      totalGasto: {
        type: Sequelize.FLOAT,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};
