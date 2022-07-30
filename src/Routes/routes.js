'use strict'

const router = require('express').Router()
const loginController = require('../controllers/login/login')

router.get('/login' , loginController.login)


module.exports = router