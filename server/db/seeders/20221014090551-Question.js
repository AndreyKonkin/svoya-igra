/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      questions: 'Сколько месяцев в году имеют 28 дней?',
      answer: '12',
      prise: 100,
      themeid: 1,
    },
    {
      questions: 'у кводратного стола отпилили угл, сколько осталось углов у стола?',
      answer: '5',
      prise: 200,
      themeid: 1,
    },
    {
      questions: 'Какая гора была самой высокой до открытия Эвереста?',
      answer: 'Эверест',
      prise: 300,
      themeid: 1,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'Из пустой',
      prise: 400,
      themeid: 1,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'Мери',
      prise: 500,
      themeid: 1,
    },
    
    {
      questions: 'Сколько месяцев в году имеют 28 дней?',
      answer: '12',
      prise: 100,
      themeid: 2,
    },
    {
      questions: 'у кводратного стола отпилили угл, сколько осталось углов у стола?',
      answer: '5',
      prise: 200,
      themeid: 2,
    },
    {
      questions: 'Какая гора была самой высокой до открытия Эвереста?',
      answer: 'Эверест',
      prise: 300,
      themeid: 2,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'Из пустой',
      prise: 400,
      themeid: 2,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'Мери',
      prise: 500,
      themeid: 2,
    },

    {
      questions: 'Сколько месяцев в году имеют 28 дней?',
      answer: '12',
      prise: 100,
      themeid: 3,
    },
    {
      questions: 'у кводратного стола отпилили угл, сколько осталось углов у стола?',
      answer: '5',
      prise: 200,
      themeid: 3,
    },
    {
      questions: 'Какая гора была самой высокой до открытия Эвереста?',
      answer: 'Эверест',
      prise: 300,
      themeid: 3,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'Из пустой',
      prise: 400,
      themeid: 3,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'Мери',
      prise: 500,
      themeid: 3,
    },

    {
      questions: 'Сколько месяцев в году имеют 28 дней?',
      answer: '12',
      prise: 100,
      themeid: 4,
    },
    {
      questions: 'у кводратного стола отпилили угл, сколько осталось углов у стола?',
      answer: '5',
      prise: 200,
      themeid: 4,
    },
    {
      questions: 'Какая гора была самой высокой до открытия Эвереста?',
      answer: 'Эверест',
      prise: 300,
      themeid: 4,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'Из пустой',
      prise: 400,
      themeid: 4,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'Мери',
      prise: 500,
      themeid: 4,
    },

    {
      questions: 'Сколько месяцев в году имеют 28 дней?',
      answer: '12',
      prise: 100,
      themeid: 5,
    },
    {
      questions: 'у кводратного стола отпилили угл, сколько осталось углов у стола?',
      answer: '5',
      prise: 200,
      themeid: 5,
    },
    {
      questions: 'Какая гора была самой высокой до открытия Эвереста?',
      answer: 'Эверест',
      prise: 300,
      themeid: 5,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'Из пустой',
      prise: 400,
      themeid: 5,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'Мери',
      prise: 500,
      themeid: 5,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
