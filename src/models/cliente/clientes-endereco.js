const Sequelize = require('sequelize')
const database = require('../../../database')

const clienteEndereco = database.define('clienteEndereco' , {
    idEnderecoCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idCidade: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rua: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    numero: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    complemento: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    bairro: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = clienteEndereco

