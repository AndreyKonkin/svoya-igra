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
      questions: 'В каком фильме главный герой перемещается в прошлое и знакомится со своими родителями?',
      answer: 'Назад в будущее',
      prise: 100,
      themeid: 2,
    },
    {
      questions: 'В каком фильме главный герой стал акционером компании Apple?',
      answer: 'Форрест Гамп',
      prise: 200,
      themeid: 2,
    },
    {
      questions: 'Какой секрет раскрыл главный герой фильма «Шоу Трумэна»?',
      answer: 'Весь мир следил за ним',
      prise: 300,
      themeid: 2,
    },
    {
      questions: 'Что происходило с главным героем фильма «Загадочная история Бенджамина Баттона»?',
      answer: 'Он родился старым и молодел',
      prise: 400,
      themeid: 2,
    },
    {
      questions: 'Кто считал словом "Миссисипи"?',
      answer: 'Росс',
      prise: 500,
      themeid: 2,
    },

    {
      questions: 'Что превращает девушку в женщину?',
      answer: 'Возраст',
      prise: 100,
      themeid: 3,
    },
    {
      questions: 'Чего никогда нет в женской сумочке?',
      answer: 'Порядка',
      prise: 200,
      themeid: 3,
    },
    {
      questions: 'Что твердое входит в меленькую дырочку?',
      answer: 'Ключ',
      prise: 300,
      themeid: 3,
    },
    {
      questions: 'Что принадлежит тебе, но чаще используют другие?',
      answer: 'Твое имя',
      prise: 400,
      themeid: 3,
    },
    {
      questions: 'К чему мы утром всегда прикасаемся, с чем мы играем перед сном, что живет у нас обычно в штанах и всегда в мыслях?',
      answer: 'Телефон',
      prise: 500,
      themeid: 3,
    },

    {
      questions: 'Джастин Тимберлейк написал, что стало хитом 2002 года после разрыва с Бритни Спирс?',
      answer: 'Cry me a river',
      prise: 100,
      themeid: 4,
    },
    {
      questions: 'Maroon 5 выпустили свой сольный альбом в 2002 году под названием Песни о…ком?',
      answer: 'Джейн',
      prise: 200,
      themeid: 4,
    },
    {
      questions: 'Самый злой рэпер начала 2022?',
      answer: 'Тарас МС',
      prise: 300,
      themeid: 4,
    },
    {
      questions: 'Кто поёт I will always love you?',
      answer: 'Уитни Хьюстон',
      prise: 400,
      themeid: 4,
    },
    {
      questions: 'Любимая группа Антона Алексеевича?',
      answer: 'Кровосток',
      prise: 500,
      themeid: 4,
    },

    {
      questions: 'Сколько енотов выпустятся 28 октября?',
      answer: 'Все!',
      prise: 100,
      themeid: 5,
    },
    {
      questions: 'Кто установил рекорд по просиживанию штанов в кампусе до 22:30? ',
      answer: 'Андрей',
      prise: 200,
      themeid: 5,
    },
    {
      questions: 'Любимое занятие Даши?',
      answer: 'Гонять шары',
      prise: 300,
      themeid: 5,
    },
    {
      questions: 'Фейковый енот?',
      answer: 'лемур Саша',
      prise: 400,
      themeid: 5,
    },
    {
      questions: 'Кто засыпает на лекциях, но знает всё?',
      answer: 'Никита',
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
