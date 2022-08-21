const Sequelize = require('sequelize')
const database = require('../../../database')

const permissaoModel = database.define('permissoes' , {
    idPermissao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    permissao: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = permissaoModel

