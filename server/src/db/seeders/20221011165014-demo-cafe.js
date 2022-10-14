/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Caves', [{
      cafeName: 'Lighthouse',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/0d/58/75/interior.jpg',
      rating: 5,
      description: 'Bar, European, Grill, Gastropub, Danish, American, Cafe, Fast Food',
    },
    {
      cafeName: 'Platform 9 3/4',
      url: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/u/u/p96725-16348823196172530fa3d26.jpg',
      rating: 4,
      description: 'European, Cafe, Eastern European, Central European',
    },
    {
      cafeName: 'Paris',
      url: 'https://legrandcafe.ru/wp-content/themes/LGC_v2/img/zal.jpg',
      rating: 4,
      description: 'Vegetarian Friendly, Vegan Options, Gluten Free Options',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Caves', null, {});
  },
};
