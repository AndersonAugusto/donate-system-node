const Sequelize = require('sequelize')
const database = require('../../../database')

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
        allowNull: true
    },
    dataNascimento: {
        type: Sequelize.STRING(15),
        allowNull: true
    },
    fotoPerfil: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    saldoCarteira: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    sobreMim: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    necessidades: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: true
    },
    bitUsuarioSeguro: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    bitResponsabilidade: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    }
})

module.exports = clientes

