/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Потупим',
    },
    {
      title: 'Кино',
    },
    {
      title: 'Нестандарт',
    },
    {
      title: 'Что слушаешь?',
    },
    {
      title: 'Полосатые',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
