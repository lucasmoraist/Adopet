'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Abrigos',[
      {
        nome: "Abrigo A",
        telefone: 555111,
        endereco: "123 Rua Principal, Cidade A",
        tutor_id: 1,
        pet_id: 3,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Abrigo B",
        telefone: 555222,
        endereco: "456 Rua Secundária, Cidade B",
        tutor_id: 4,
        pet_id: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Abrigo C",
        telefone: 555333,
        endereco: "789 Avenida Principal, Cidade C",
        tutor_id: 1,
        pet_id: 3,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Abrigo D",
        telefone: 5554444,
        endereco: "101 Rua Secundária, Cidade D",
        tutor_id: 4,
        pet_id: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Abrigo E",
        telefone: 555555,
        endereco: "202 Avenida Secundária, Cidade E",
        tutor_id: 5,
        pet_id: 5,
        createdAt: new Date(),
				updatedAt: new Date()
      }                              
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Abrigos', null, {})
  }
};
