//Loads .env file contents into process.env by default. 
require ('dotenv').config()

//Require express and set up the server
const express = require('express')

//Import cors
const cors = require('cors')

//import DB
const db = require('./DB/connection')

//Import application middleware
//const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//Import router
const router = require('./Routes/router')

//Create an application using express
const pfServer = express()

//Enable CORS for all origins
pfServer.use(cors())

//Set up body-parser to parse JSON data in requests 
pfServer.use(express.json())

//Set up application middleware
//pfServer.use(applicationMiddleware)

//Set up routes
pfServer.use(router)

//Port creation
const PORT = 4000 || process.env.PORT; 

//Start the server
pfServer.listen(PORT,()=>{
    console.log('pfServer listening on port '+PORT);
} )

// Test route
pfServer.get('/', (req, res) => {
    res.send("Welcome to Project Fair Server!")
})