const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB , process.env.USER, process.env.PW, {
      host: process.env.HOST,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
          logging: false
        }
    }
})

module.exports = sequelize;