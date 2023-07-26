'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PagamentoTipos', [
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
    await queryInterface.bulkDelete('PagamentoTipos', null, {});
  }
};
