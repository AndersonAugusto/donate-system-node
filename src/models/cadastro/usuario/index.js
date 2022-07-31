const database = require('../../../../database')


const usuarios = async (req, res, next) => {
    
    const usuario = require('./usuario')
    await database.sync()
    

    res.status(200).send({
        message: 'Success! Nothing has been done'
    })

}

module.exports = {
    usuarios
}