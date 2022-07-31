const Sequelize = require('sequelize')
const database = require('../../../../database')

const usuario = database.define('usuario' , {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    genero: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = usuario