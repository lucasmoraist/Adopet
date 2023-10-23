'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tutores.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    sobre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutores',
  });
  return Tutores;
};