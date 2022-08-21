"use strict"

const database = require('../../../database')
const bcrypt = require('bcrypt');
const clienteDB = require('../../models/cliente/clientes')
const clienteEnderecoDB = require('../../models/cliente/clientes-endereco')
const clienteContatoDB = require('../../models/cliente/clientes-contato')
const clienteImagemDB = require('../../models/cliente/cliente-imagem-perfil')
const permissaoDB = require('../../models/permissao/permissoes')


const clientes = async (req, res, next) => {
    try {
        const clientes = await clienteDB.findAll();
        
        return res.status(200).send({
            clientes
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const cliente = async (req, res, next) => {
    try {
        const idCliente = req.query.idCliente
        
        if(!idCliente){
            return res.status(400).send({ Message: 'Parâmetro idCliente não encontrado' })
        }
        
        const cliente = await clienteDB.findOne( { where: {idCliente: idCliente }})
        // const endereco = await clienteEnderecoDB.findOne( { where: { idCliente: idCliente }})
        const contato = await clienteContatoDB.findOne( { where: { idCliente: idCliente }})

        if(!cliente){
            return res.status(200).send({ Message: 'Cliente não encontrado no banco' })
        }

        res.status(200).send({
            message:'Sucesso.',
            cliente,
            // endereco,
            contato
            
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const insereCliente = async (req, res, next) => {
    try {
        const dadosCliente = req.body.cliente
        const endereco = req.body.cliente.endereco
        const contato = req.body.cliente.contato

        if(!dadosCliente.senha || !dadosCliente.login){
            return res.status(422).send({Message:'Login e senha são obrigatórios.'})
        }

        //CREATE HASH PASSWORD
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(dadosCliente.senha , salt)

        const infoCliente = {
            login: dadosCliente.login,
            senha: passwordHash,
            nome: dadosCliente.nome,
            idPermissao: dadosCliente.idPermissao,
            telefone: dadosCliente.telefone,
            email: dadosCliente.email,
            cpf: dadosCliente.cpf,
            genero: dadosCliente.genero,
            dataNascimento: dadosCliente.dataNascimento,
            bitResponsabilidade: dadosCliente.bitResponsabilidade
        }

        const cliente = await clienteDB.findOne({ where: { login: dadosCliente.login }})
        if(!cliente){
            
            await clienteDB.create(infoCliente).then(async res => {

                  const dadosEndereco = {
                    idCliente: res.idCliente,
                    idCidade: endereco.idCidade,
                    rua: endereco.rua,
                    numero: endereco.numero,
                    complemento:endereco.complemento,
                    bairro: endereco.bairro
                  }
                  const dadosContato = {
                    idCliente: res.idCliente,
                    facebook: contato.facebook,
                    instagram: contato.instagram,
                    twitter: contato.twitter,
                    celularWhatsapp:contato.celularWhatsapp,
                    telefoneFixo: contato.telefoneFixo
                  }

                  await clienteEnderecoDB.create(dadosEndereco)
                  await clienteContatoDB.create(dadosContato)
                  
              })
        } else {
            return res.status(400).send({ message: 'Cliente já cadastrado' })
        }

        const clienteNovo = await clienteDB.findOne({ where: { login: dadosCliente.login }})

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
        const data = req.body.cliente
        const dataEndereco = req.body.cliente.endereco
        const dataContato = req.body.cliente.contato

        let cliente = await clienteDB.findOne( { where: { idCliente: data.idCliente }})
        let endereco = await clienteEnderecoDB.findOne( { where: { idCliente: data.idCliente }})
        let contato = await clienteContatoDB.findOne( { where: { idCliente: data.idCliente }})

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
        
        endereco.rua = dataEndereco.rua
        endereco.numero = dataEndereco.numero
        endereco.complemento = dataEndereco.complemento
        endereco.bairro = dataEndereco.bairro

        contato.facebook = dataContato.facebook
        contato.instagram = dataContato.instagram
        contato.twitter = dataContato.twitter
        contato.celularWhatsapp = dataContato.celularWhatsapp
        contato.telefoneFixo = dataContato.telefoneFixo

        await cliente.save()
        await endereco.save()
        await contato.save()
        

        return res.status(200).send({
            message:'Cliente atualizado.',
            cliente, 
            endereco ,
            contato
            
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const deletaCliente = async (req, res, next) => {
    try {
        const idCliente = req.query.idCliente

        const cliente = await clienteDB.findOne({where: {idCliente: idCliente}})

        if(!cliente){
            return res.status(400).send({Message: 'Cliente não encontrado'})
        } else {

            await clienteDB.destroy({where: {idCliente: idCliente}})
    
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