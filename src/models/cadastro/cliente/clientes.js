const Sequelize = require('sequelize')
const database = require('../../../../database')

const clientes = database.define('clientes' , {
    idCliente: {
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
    idPermissao: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    token: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    bitOnline: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    cadastradoem: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    bitAtivo: {
        type: Sequelize.TINYINT(1),
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = clientes