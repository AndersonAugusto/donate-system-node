const Sequelize = require('sequelize')
const database = require('../../../../database')

const clientes = database.define('clientes' , {
    idCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    token: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    IdPermissao: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    cpf: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    genero: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: true
    },
    bitAtivo: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = clientes