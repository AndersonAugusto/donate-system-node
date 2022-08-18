'use strict'
const clienteData = require('../../models/cliente/clientes')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const login = async(req , res , next) => {
    try {
        const {login , senha} = req.body

        const cliente = await clienteData.findOne({ where: {login: login }})
        const idCliente = cliente.dataValues.idCliente

        if(!cliente) res.status(404).send({Message:'Usuario não encontrado'})

        const checkPassword = await bcrypt.compare(senha , cliente.senha)

        if(!checkPassword){
            return res.status(422).send({Message: 'Senha inválida'})
        }
        const token = jwt.sign({
            id: idCliente
         }, process.env.SECRET , { expiresIn: '24h' })

        return res.status(200).send({ Message: 'Logado com sucesso!', token });
        
    } catch(error) {
        return res.status(500).send({error: error.Message})
    }
}


module.exports = {
    login
}