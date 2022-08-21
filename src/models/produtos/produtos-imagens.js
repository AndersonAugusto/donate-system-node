const Sequelize = require('sequelize')
const database = require('../../../database')

const imagemProdutoModel = database.define('produtoImagem' , {
    idImagem: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    urlImagem: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = imagemProdutoModel

