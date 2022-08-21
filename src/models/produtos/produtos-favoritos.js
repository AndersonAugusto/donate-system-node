const Sequelize = require('sequelize')
const database = require('../../../database')

const produtoFavoritoModel = database.define('produtoFavorito' , {
    idFavorito: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = produtoFavoritoModel

