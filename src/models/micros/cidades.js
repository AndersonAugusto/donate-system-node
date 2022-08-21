const Sequelize = require('sequelize')
const database = require('../../../database')

const cidadeModel = database.define('cidades' , {
    idCidade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idEstado: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nomeCidade: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = cidadeModel

