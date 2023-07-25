'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PagamentoTipo', [
      {
        tipo: 'PIX'
      },
      {
        tipo: 'Debito'
      },
      {
        tipo: 'Credito'
      },
      {
        tipo: 'Dinheiro'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PagamentoTipo', null, {});
  }
};
