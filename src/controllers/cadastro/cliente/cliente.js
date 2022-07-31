"use strict"

const database = require('../../../../database')
const clienteData = require('../../../models/cadastro/cliente/clientes')

const clientes = async (req, res, next) => {
    try {
        await database.sync()

        const clientes = await clienteData.findAll();

        res.status(200).send({
            message:'Sucesso clientes',
            clientes
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const cliente = async (req, res, next) => {
    try {
        await database.sync()

        const idCliente = req.query.idCliente
        
        const cliente = await clienteData.findByPk(idCliente)

        res.status(200).send({
            message:'Sucesso.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const insereCliente = async (req, res, next) => {
    try {
        await database.sync()

        const data = req.body

        const infoCliente = {
            login: data.login,
            senha: data.senha,
            idPermissao: data.idPermissao
        }

        const cliente = await clienteData.findOne({ where: { login: data.login }})

        if(!cliente){
              await clienteData.create(infoCliente)
        } else {
            return res.status(400).send({ message: 'Cliente já cadastrado' })
        }

        const clienteNovo = await clienteData.findOne({ where: { login: data.login }})

        return res.status(200).send({
            message:'Cliente cadastrado com sucesso.',
            cliente: clienteNovo
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const atualizaCliente = async (req, res, next) => {
    try {
        await database.sync()


        res.status(200).send({
            message:'Sucesso.'
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const deletaCliente = async (req, res, next) => {
    try {
        await database.sync()


        res.status(200).send({
            message:'Sucesso.'
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}


module.exports = {
    clientes,
    cliente,
    insereCliente,
    atualizaCliente,
    deletaCliente
}