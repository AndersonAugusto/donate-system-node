'use strict'

const router = require('express').Router()
const { required } = require('../middleware/login')
const loginController = require('../controllers/login/login')
const clienteController = require('../controllers/cliente/cliente-controller')
const denunciaController = require('../controllers/denuncias/denuncia-controller')
const trofeuController = require('../controllers/trofeu/trofeu-controller')
const produtoController = require('../controllers/produtos/produtos-controller')

router.get('/' , (req, res, next) =>  res.status(200).send({ message: 'Bem-vindo' }))

//Login
router.post('/login' , loginController.login)

//cliente
router.get('/clientes' , required, clienteController.clientes)
router.get('/cliente' , required, clienteController.cliente)
router.post('/cliente' , required, clienteController.insereCliente)
router.put('/cliente' , required, clienteController.atualizaCliente)
router.delete('/cliente' , required, clienteController.deletaCliente)

//denuncias
router.get('/denuncias' , required, denunciaController.getDenuncias)
router.get('/denuncia' , required, denunciaController.getDenuncia)
router.post('/denuncia' , required, denunciaController.insereDenuncia)
router.put('/denuncia' , required, denunciaController.alteraDenuncia)
router.delete('/denuncia' , required, denunciaController.deleteDenuncia)

//trofeus
router.get('/trofeus' , required, trofeuController.getTrofeus)
router.get('/trofeu' , required, trofeuController.getTrofeu)
router.post('/trofeu' , required, trofeuController.insereTrofeu)
router.put('/trofeu' , required, trofeuController.alteraTrofeu)
router.delete('/trofeu' , required, trofeuController.deleteTrofeu)

//trofeus
router.get('/produtos' , required, produtoController.produtos)
router.get('/produto' , required, produtoController.produto)
router.post('/produto' , required, produtoController.insereProduto)
router.put('/produto' , required, produtoController.alteraProduto)
router.delete('/produto' , required, produtoController.deleteProduto)

module.exports = router