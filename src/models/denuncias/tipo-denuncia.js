const Sequelize = require('sequelize')
const database = require('../../../database')

const denunciasTipos = database.define('tipoDenuncias' , {
    idTipoDenucia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = denunciasTipos

