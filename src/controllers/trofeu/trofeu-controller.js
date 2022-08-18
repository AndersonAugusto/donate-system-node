"use strict"

const database = require('../../../database')
const denuncias = require('../../models/denuncias/denuncias-cliente')
const trofeusClienteModel = require('../../models/trofeu/trofeus-cliente')
const trofeusModel = require('../../models/trofeu/trofeus')
const infoTrofeuModel = require('../../models/trofeu/informacao-trofeu')
const expTrofeuModel = require('../../models/trofeu/experiencia-trofeu')
const logTrofeuModel = require('../../models/trofeu/log-trofeu')
const categoriaProdutosModel = require('../../models/micros/categorias-produtos')

const getTrofeus = async (req, res, next) => {
    try {

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const getTrofeu = async (req, res, next) => {
    try {

        res.status(200).send({
            message:'Sucesso.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const insereTrofeu = async (req, res, next) => {
    try {

        return res.status(200).send({
            message:'Cliente cadastrado com sucesso.',
            cliente: clienteNovo
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const alteraTrofeu = async (req, res, next) => {
    try {
  
        return res.status(200).send({
            message:'Cliente atualizado.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const deleteTrofeu = async (req, res, next) => {
    try {
        
           return res.status(200).send({
                message:'Cliente deletado!.',
                cliente
            })
        
    } catch(error){
        return res.status(500).send({error: error.message})
    }
}


module.exports = {
    getTrofeus,
    getTrofeu,
    insereTrofeu,
    alteraTrofeu,
    deleteTrofeu
}