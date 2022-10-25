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
      answer: 'эверест',
      prise: 300,
      themeid: 1,
    },
    {
      questions: 'Из какой посуды не едят?',
      answer: 'из пустой',
      prise: 400,
      themeid: 1,
    },
    {
      questions: 'У отца Мери 5 дочерей: Чача, Чичи, Чочо, Чече. Как зовут пятую дочь?',
      answer: 'мери',
      prise: 500,
      themeid: 1,
    },

    {
      questions: 'В каком фильме главный герой перемещается в прошлое и знакомится со своими родителями?',
      answer: 'назад в будущее',
      prise: 100,
      themeid: 2,
    },
    {
      questions: 'В каком фильме главный герой стал акционером компании Apple?',
      answer: 'форрест гамп',
      prise: 200,
      themeid: 2,
    },
    {
      questions: 'Какой секрет раскрыл главный герой фильма «Шоу Трумэна»?',
      answer: 'весь мир следил за ним',
      prise: 300,
      themeid: 2,
    },
    {
      questions: 'Что происходило с главным героем фильма «Загадочная история Бенджамина Баттона»?',
      answer: 'он родился старым и молодел',
      prise: 400,
      themeid: 2,
    },
    {
      questions: 'Кто считал словом "Миссисипи"?',
      answer: 'росс',
      prise: 500,
      themeid: 2,
    },

    {
      questions: 'Что превращает девушку в женщину?',
      answer: 'возраст',
      prise: 100,
      themeid: 3,
    },
    {
      questions: 'Чего никогда нет в женской сумочке?',
      answer: 'порядка',
      prise: 200,
      themeid: 3,
    },
    {
      questions: 'Что твердое входит в меленькую дырочку?',
      answer: 'ключ',
      prise: 300,
      themeid: 3,
    },
    {
      questions: 'Что принадлежит тебе, но чаще используют другие?',
      answer: 'твое имя',
      prise: 400,
      themeid: 3,
    },
    {
      questions: 'К чему мы утром всегда прикасаемся, с чем мы играем перед сном, что живет у нас обычно в штанах и всегда в мыслях?',
      answer: 'телефон',
      prise: 500,
      themeid: 3,
    },

    {
      questions: 'Джастин Тимберлейк написал, что стало хитом 2002 года после разрыва с Бритни Спирс?',
      answer: 'cry me a river',
      prise: 100,
      themeid: 4,
    },
    {
      questions: 'Maroon 5 выпустили свой сольный альбом в 2002 году под названием Песни о…ком?',
      answer: 'джейн',
      prise: 200,
      themeid: 4,
    },
    {
      questions: 'Самый злой рэпер начала 2022?',
      answer: 'тарас МС',
      prise: 300,
      themeid: 4,
    },
    {
      questions: 'Кто поёт I will always love you?',
      answer: 'уитни хьюстон',
      prise: 400,
      themeid: 4,
    },
    {
      questions: 'Любимая группа Антона Алексеевича?',
      answer: 'кровосток',
      prise: 500,
      themeid: 4,
    },

    {
      questions: 'Сколько енотов выпустятся 28 октября?',
      answer: 'все!',
      prise: 100,
      themeid: 5,
    },
    {
      questions: 'Кто установил рекорд по просиживанию штанов в кампусе до 22:30? ',
      answer: 'андрей',
      prise: 200,
      themeid: 5,
    },
    {
      questions: 'Любимое занятие Даши?',
      answer: 'гонять шары',
      prise: 300,
      themeid: 5,
    },
    {
      questions: 'Фейковый енот?',
      answer: 'лемур саша',
      prise: 400,
      themeid: 5,
    },
    {
      questions: 'Кто засыпает на лекциях, но знает всё?',
      answer: 'никита',
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
