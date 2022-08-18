"use strict"

const database = require('../../../database')
const denuncias = require('../../models/denuncias/denuncias-cliente')
const denunciasTipos = require('../../models/denuncias/tipo-denuncia')

const getDenuncias = async (req, res, next) => {
    try {

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const getDenuncia = async (req, res, next) => {
    try {

        res.status(200).send({
            message:'Sucesso.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const insereDenuncia = async (req, res, next) => {
    try {

        return res.status(200).send({
            message:'Cliente cadastrado com sucesso.',
            cliente: clienteNovo
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const alteraDenuncia = async (req, res, next) => {
    try {
  
        return res.status(200).send({
            message:'Cliente atualizado.',
            cliente
        })

    }catch(error){
        return res.status(500).send({error: error.message})
    }
}

const deleteDenuncia = async (req, res, next) => {
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
    getDenuncias,
    getDenuncia,
    insereDenuncia,
    alteraDenuncia,
    deleteDenuncia
}