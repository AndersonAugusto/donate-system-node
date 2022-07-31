'use strict'
const usuariosData = require('../../../models/cadastro/usuario')

const usuario = async(req , res , next) => {
    try {
            
        const data = req.body
        console.log(data)

        const usuario = await usuariosData.usuarios()


        return res.status(200).send({Message:'usuario its working'})
        
    } catch(error) {
        return res.status(500).send(error.Message)
    }
}


module.exports = {
    usuario
}