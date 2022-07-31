'use strict'

const router = require('express').Router()
const loginController = require('../controllers/login/login')
const usuarioController = require('../controllers/cadastro/usuario/usuario')
const clienteController = require('../controllers/cadastro/cliente/cliente')

router.get('/' , (req, res, next) =>  res.status(200).send({message: 'Bem-vindo'}))

//Login
router.get('/login' , loginController.login)

//usuario
router.get('/usuario' , usuarioController.usuario)

//cliente
router.get('/cliente' , clienteController.cliente)
router.get('/clientes' , clienteController.clientes)
router.post('/cliente' , clienteController.insereCliente)
// router.update('/cliente' , clienteController.atualizaCliente)
router.delete('/cliente' , clienteController.deletaCliente)


module.exports = router