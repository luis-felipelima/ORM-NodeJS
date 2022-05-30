/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Niveis', [
    {
      dresc_nivel: 'básico',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dresc_nivel: 'intermediário',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dresc_nivel: 'avançado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Niveis', null, {}),
};
