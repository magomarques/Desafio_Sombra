'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'mago1',
        email: 'mago1@email.com',
        password: '111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mago2',
        email: 'mago2@email.com',
        password: '222',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
