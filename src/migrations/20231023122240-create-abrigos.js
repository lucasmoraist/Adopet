'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Abrigos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pet_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pets', key: 'id' }
      },
      tutor_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Tutores', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Abrigos');
  }
};