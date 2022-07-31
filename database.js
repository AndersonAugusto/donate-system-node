const Sequelize = require('Sequelize')
require('dotenv').config()

const dbName = process.env.dbName
const dbUser = process.env.dbUser
const dbPassword = process.env.dbPassword
const dbHost = process.env.dbHost

const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        dialect: "mysql",
        host: dbHost    
    }
)

// sequelize.authenticate().then(() => {
//     console.log(`Conectado com banco de dados ${dbName}`)
// }).catch(err => {
//     console.error('Unable to connect' , err)
// })

module.exports = sequelize;