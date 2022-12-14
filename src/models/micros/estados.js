const Sequelize = require('sequelize')
const database = require('../../../database')

const estadoModel = database.define('estados' , {
    idEstado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeEstado: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    uf: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = estadoModel

