const Sequelize = require('sequelize')
const database = require('../../../database')

const expTrofeuModel = database.define('trofeuExperiencia' , {
    idExperiencia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nivelAtual: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    proximoNivel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    experienciaDe: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    experienciaPara: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    inseridoPor: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = expTrofeuModel

