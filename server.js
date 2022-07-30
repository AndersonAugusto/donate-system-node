"use strict"


const express = require('express')
require('dotenv').config()
const port = process.env.port
const cors = require('cors')
const router = require('./src/Routes/routes')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.use((req, res, next) => {
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', ['PUT,POST,PATCH,DELETE,GET' , 'OPTIONS', 'HEAD'])
    }
    app.use(cors())
    next();
})



app.use(router)

app.listen(port, () => {
    console.log(`Aplicação sendo executada na porta localhost:${port}`)
})


module.exports = app