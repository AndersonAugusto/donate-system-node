'use strict'

require("dotenv").config();
const jwt = require('jsonwebtoken');


exports.required = (req, res , next) => {
    try {
        const tokenHeader = req.headers['authorization']
        const token = tokenHeader && tokenHeader.split(' ')[1] 
  
        if(!token) return res.status(401).send({auth: false , Message: 'Token não encontrado'})

        const secret = process.env.SECRET

        jwt.verify(token , secret)

        next()

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}