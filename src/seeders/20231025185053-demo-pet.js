'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pets', [
      {
        nome: "Rex",
        idade: 3,
        porte: "Médio",
        caracteristicas: "Pelagem marrom, brincalhão e adora correr no parque.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Luna",
        idade: 2,
        porte: "Pequeno",
        caracteristicas: "Pelagem branca, olhos azuis, adora brincar com bolinhas.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Toby",
        idade: 5,
        porte: "Grande",
        caracteristicas: "Pelagem preta e branca, tranquilo e ama carinho na barriga.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Bella",
        idade: 1,
        porte: "Pequeno",
        caracteristicas: "Pelagem dourada, bastante energia e gosta de pular.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Simba",
        idade: 4,
        porte: "Médio",
        caracteristicas: "Pelagem alaranjada, curioso e ama caçar brinquedos.",
        createdAt: new Date(),
				updatedAt: new Date()
      }                              
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pets', null, {})
  }
};
