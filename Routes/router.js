
// 1. import express
const express = require('express')

//2. import controller
const userController = require('../Controllers/userController')

const projectController = require('../Controllers/projectController')


const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')

//3. create router object of express to define path
const router = express.Router()

//4. Register api call
router.post('/register', userController.register)

//5. Login api call
router.post('/login', userController.login)

//6. AddProject api call
router.post('/project/add-project', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProject)

//7. export router
module.exports = router

