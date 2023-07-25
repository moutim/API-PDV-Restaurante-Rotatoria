'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vendas', [
      {
        clienteId: 1,
        pagamentoId: 1,
        total: 28.99
      },
      {
        clienteId: 1,
        pagamentoId: 2,
        total: 29
      },
      {
        clienteId: 2,
        pagamentoId: 1,
        total: 25
      },
      {
        clienteId: 2,
        pagamentoId: 4,
        total: 46
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendas', null, {});
  }
};
