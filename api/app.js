const express = require('express')
const app = express()  // assign express to the variable called 'app'
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const markersRouter = require('./controllers/markers')
const middleware = require('./utils/middleware')

mongoose.set('strictQuery', false)

// connect to mongodb
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('error connecting to mongodb:', error.message))

app.use(cors())  // middleware to assure same origin policy
app.use(express.json())  // middleware to parse JSON bodies
app.use(middleware.requestLogger)

app.use('/api/markers', markersRouter)  // attach './api/markers' to markersRouter

app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)

module.exports = app