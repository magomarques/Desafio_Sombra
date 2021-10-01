'use strict';
const {
  Model
} = require('sequelize');
//const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Player.belongsTo(Team);
      Notes.belongsTo(models.Users, {
        foreignKey: 'authorId'
      }); // Sem definição da FK o Sequelize cria por default
    }
  };
  Notes.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};