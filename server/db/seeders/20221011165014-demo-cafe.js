/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Caves', [{
      cafeName: 'Lighthouse',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/0d/58/75/interior.jpg',
      rating: 5,
      description: 'Bar, European, Grill, Gastropub, Danish, American, Cafe, Fast Food',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Caves', null, {});
  },
};
