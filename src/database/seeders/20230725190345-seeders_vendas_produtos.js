'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VendasProdutos', [
      {
        vendaId: 1,
        produtoId: 1,
        quantidade: 2
      },
      {
        vendaId: 1,
        produtoId: 2,
        quantidade: 2
      },
      {
        vendaId: 2,
        produtoId: 1,
        quantidade: 2
      },
      {
        vendaId: 2,
        produtoId: 2,
        quantidade: 2
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VendasProdutos', null, {});
  }
};
