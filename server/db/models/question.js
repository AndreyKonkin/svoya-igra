const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      // define association here
      this.belongsTo(Theme, { foreignKey: 'themeid' });
    }
  }
  Question.init({
    questions: DataTypes.STRING,
    answer: DataTypes.STRING,
    prise: DataTypes.INTEGER,
    themeid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
