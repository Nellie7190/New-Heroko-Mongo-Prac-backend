// Require in dependencies
require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const vinylsController = require('./controllers/vinylsController')

// Define port
const PORT = process.env.PORT

// Create express app
const app = express()

//Allow cors
app.use(cors())
// Accept json as req.body
app.use(express.json())

// Use logger middleware
app.use(logger('dev'));

// Vinyls routes
app.use('/vinyls', vinylsController)

// Start app on port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})