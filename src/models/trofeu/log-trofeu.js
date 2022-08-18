const Sequelize = require('sequelize')
const database = require('../../../database')

const logTrofeuCliente = database.define('trofeuLog' , {
    idLogTrofeu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idTrofeu: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nivelRegistrado: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    expRegistrado: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = logTrofeuCliente

