const Sequelize = require('sequelize')
const database = require('../../../database')

const clienteContato = database.define('clienteContato' , {
    idContatoCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    facebook: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    instagram: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    twitter: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    celularWhatsapp: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    telefoneFixo: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = clienteContato

