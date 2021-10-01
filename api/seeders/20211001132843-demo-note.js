'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notes', [
    {
      description: 'texto 1',
      authorId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'texto 2',
      authorId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notes', null, {});
  }
};
