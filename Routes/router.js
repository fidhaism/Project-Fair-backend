
//to setup paths

// 1. import express
const express = require('express')

const userController = require('../Controllers/userController')
//2. create router object of express to define path
const router = express.Router()

//3. Register api call
router.post('/register', userController.register)


module.exports = router