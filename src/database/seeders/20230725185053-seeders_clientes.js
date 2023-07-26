'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [
      {
        nome: 'Vitor Moutim',
        telefone: '998181280',
        cep: '04851250',
        endereco: 'Rua Affonso Paulillo',
        enderecoNumero: '14 C',
        totalPedidos: 4,
        totalGasto: 150.35
      },
      {
        nome: 'Silvania Moutim',
        telefone: '(11) 98910-3562',
        cep: '04851250',
        endereco: 'Rua Affonso Paulillo',
        enderecoNumero: '14 C',
        totalPedidos: 9,
        totalGasto: 350.35
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
