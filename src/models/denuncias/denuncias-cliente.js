const Sequelize = require('sequelize')
const database = require('../../../database')

const denuncias = database.define('denuncias' , {
    idDenuncia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idClienteBan: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    idTipoDenuncia: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = denuncias

