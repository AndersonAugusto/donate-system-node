const Sequelize = require('sequelize')
const database = require('../../../database')

const infoTrofeuModel = database.define('trofeuInformacao' , {
    idTituloTrofeu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idTrofeu: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = infoTrofeuModel

