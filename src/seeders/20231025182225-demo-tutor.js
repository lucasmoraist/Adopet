'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tutores', [
      {
        nome: "João Silva",
        email: "joao@email.com",
        password: "senha123",
        telefone: 555555,
        cidade: "São Paulo",
        sobre: "Olá, eu sou o João.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Maria Santos",
        email: "maria@email.com",
        password: "senha456",
        telefone: 555555,
        cidade: "Rio de Janeiro",
        sobre: "Oi, eu sou a Maria.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Carlos Pereira",
        email: "carlos@email.com",
        password: "senha789",
        telefone: 55555,
        cidade: "Belo Horizonte",
        sobre: "Ei, eu sou o Carlos.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Ana Oliveira",
        email: "ana@email.com",
        password: "senhaabc",
        telefone: 55555,
        cidade: "Salvador",
        sobre: "Oi, sou a Ana e gosto de música.",
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: "Lucas Mendes",
        email: "lucas@email.com",
        password: "senhaxyz",
        telefone: 5555555,
        cidade: "Curitiba",
        sobre: "Olá, sou o Lucas e adoro esportes.",
        createdAt: new Date(),
				updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tutores', null, {})
  }
};
