const Sequelize = require('sequelize')
const database = require('../../../database')

const categoriaModel = database.define('categorias' , {
    idCategoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bitAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = categoriaModel

