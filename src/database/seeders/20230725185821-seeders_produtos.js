'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Marmitex Pequeno',
        preco: 17.99
      },
      {
        nome: 'Marmitex Grande',
        preco: 19.99
      },
      {
        nome: 'Feijoada Grande',
        preco: 40.00
      },
      {
        nome: 'Feijoada Pequena',
        preco: 35.00
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
