'use strict'
const database = require('../../../../database')
const usuariosData = require('../../../models/cadastro/usuario/usuario')

const usuario = async(req , res , next) => {
    try {
        const usuario = await usuariosData.findAll()

        return res.status(200).send({usuario})
        
    } catch(error) {
        return res.status(500).send(error.Message)
    }
}

const insereUsuario = async(req , res , next) => {
    try {
        const data = req.body
        
        const infoUsuario = {  
            nome: data.nome,
            email: data.email,
            cpf: data.cpf,
            genero: data.genero,
            dataNascimento: data.dataNascimento
        }
        
        await database.sync()
        const usuario = await usuariosData.create(infoUsuario)

        return res.status(200).send({
            usuario
        })
        
    } catch(error) {
        return res.status(500).send({erro: error.Message})
    }
}


module.exports = {
    usuario,
    insereUsuario
}