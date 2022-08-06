const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.URI , {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
})


module.exports = sequelize;