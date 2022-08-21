const Sequelize = require('sequelize')
const database = require('../../../database')

const PedidosModel = database.define('pedidos' , {
    idPedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nomeProduto: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    quantidade: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    descricao: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    statusPedido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = PedidosModel

