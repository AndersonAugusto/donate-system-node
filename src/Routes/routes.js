'use strict'

const router = require('express').Router()
const { required } = require('../middleware/login')
const loginController = require('../controllers/login/login')
const usuarioController = require('../controllers/cadastro/usuario/usuario')
const clienteController = require('../controllers/cadastro/cliente/cliente')

router.get('/' , (req, res, next) =>  res.status(200).send({ message: 'Bem-vindo' }))

//Login
router.post('/login' , loginController.login)

//usuario
router.get('/usuario' , usuarioController.usuario)
router.post('/usuario' , usuarioController.insereUsuario)

//cliente
router.get('/clientes' , required, clienteController.clientes)
router.get('/cliente' , required, clienteController.cliente)
router.post('/cliente' , required, clienteController.insereCliente)
router.put('/cliente' , required, clienteController.atualizaCliente)
router.delete('/cliente' , required, clienteController.deletaCliente)


module.exports = router