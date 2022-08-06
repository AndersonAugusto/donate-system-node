const Sequelize = require('sequelize')
const database = require('../../../../database')

const usuario = database.define('usuario' , {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

module.exports = usuario