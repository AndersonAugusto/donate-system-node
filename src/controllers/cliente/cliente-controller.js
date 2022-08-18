"use strict"

const database = require('../../../database')
const bcrypt = require('bcrypt');
const clienteData = require('../../models/cliente/clientes')

const clientes = async (req, res, next) => {
    try {
        const clientes = await clienteData.findAll();
        
        return res.status(200).send({
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
        
        if(!idCliente){
            return res.status(400).send({ Message: 'Parâmetro idCliente não encontrado' })
        }
        
        const cliente = await clienteData.findOne( { where: {idCliente: idCliente }})


        if(!cliente){
            return res.status(200).send({ Message: 'Cliente não encontrado no banco' })
        }

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
        // await clienteData.sync({alter : true})
        const data = req.body

        if(!data.senha || !data.login){
            return res.status(422).send({Message:'Login e senha são obrigatórios.'})
        }

        //CREATE HASH PASSWORD
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(data.senha , salt)

        const infoCliente = {
            login: data.login,
            senha: passwordHash,
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            cpf: data.cpf,
            genero: data.genero,
            dataNascimento: data.dataNascimento,
            bitResponsabilidade: data.bitResponsabilidade
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
        const data = req.body

        const cliente = await clienteData.findOne( { where: {idCliente: data.idCliente }})

        if(!cliente){
            return res.status(400).send({ Message: 'Cliente não encontrado' })
        }

        cliente.login = data.login
        cliente.senha = data.senha
        cliente.telefone = data.telefone
        cliente.email = data.email
        cliente.cpf = data.cpf
        cliente.genero = data.genero
        cliente.dataNascimento = data.dataNascimento
        await cliente.save()
        

        return res.status(200).send({
            message:'Cliente atualizado.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const deletaCliente = async (req, res, next) => {
    try {
        const idCliente = req.query.idCliente

        const cliente = await clienteData.findOne({where: {idCliente: idCliente}})

        if(!cliente){
            return res.status(400).send({Message: 'Cliente não encontrado'})
        } else {

            await clienteData.destroy({where: {idCliente: idCliente}})
    
           return res.status(200).send({
                message:'Cliente deletado!.',
                cliente
            })
        }
    } catch(error){
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