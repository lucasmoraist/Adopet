'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abrigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Abrigos.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Abrigos',
  });
  return Abrigos;
};