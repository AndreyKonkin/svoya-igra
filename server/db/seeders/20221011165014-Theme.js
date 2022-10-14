/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Вопросы для тупых',
    },
    {
      title: 'Вопросы тупых',
    },
    {
      title: 'Вопросы для т',
    },
    {
      title: 'Восы для тупых',
    },
    {
      title: 'Вопро дя тух',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
