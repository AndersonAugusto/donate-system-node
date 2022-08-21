const Sequelize = require('sequelize')
const database = require('../../../database')

const clienteImagemContato = database.define('clienteImagemContato' , {
    idImagemPerfil: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    urlImagem: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = clienteImagemContato

