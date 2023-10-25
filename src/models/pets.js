'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasMany(models.Abrigos,{
        foreignKey: 'pet_id'
      })
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    porte: DataTypes.STRING,
    caracteristicas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};