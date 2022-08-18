const Sequelize = require('sequelize')
const database = require('../../../database')

const trofeusModel = database.define('trofeus' , {
    idTrofeu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idTituloTrofeu: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nomeTrofeu: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    idCategoria: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = trofeusModel

