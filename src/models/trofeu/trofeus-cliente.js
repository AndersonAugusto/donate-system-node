const Sequelize = require('sequelize')
const database = require('../../../database')

const trofeusClienteModel = database.define('trofeusCliente' , {
    idTrofeuCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idTrofeu: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    experiencia: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    nivelAtual: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idExperiencia: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = trofeusClienteModel

