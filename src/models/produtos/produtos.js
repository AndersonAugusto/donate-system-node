const Sequelize = require('sequelize')
const database = require('../../../database')

const ProdutosModel = database.define('produtos' , {
    idProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    quantidade: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false
    },
    criadoPor: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = ProdutosModel

