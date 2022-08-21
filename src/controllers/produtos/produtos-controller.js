'use strict'
const database = require('../../../database')
const produtosDB = require('../../models/produtos/produtos')
const produtosFavoritoDB = require('../../models/produtos/produtos-favoritos')
const produtosImagemDB = require('../../models/produtos/produtos-imagens')
const produtosPedidoDB = require('../../models/produtos/produtos-pedido')

const produtos = async(req , res , next) => {
    try {
        
        return res.status(200).send({ 
            Message: 'Sucesso.'
        });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}
const produto = async(req , res , next) => {
    try {
        
        return res.status(200).send({ 
            Message: 'Sucesso.'
        });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}
const insereProduto = async(req , res , next) => {
    try {
        
        return res.status(200).send({ 
            Message: 'Sucesso.'
        });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}
const alteraProduto = async(req , res , next) => {
    try {
        
        return res.status(200).send({ 
            Message: 'Sucesso.'
        });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}
const deleteProduto = async(req , res , next) => {
    try {
        
        return res.status(200).send({ 
            Message: 'Sucesso.'
        });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}

module.exports = {
    produtos,
    produto,
    insereProduto,
    alteraProduto,
    deleteProduto
}