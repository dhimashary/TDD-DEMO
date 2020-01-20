const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const errorHandler = require('./middlewares/errorHandler')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/alpha-TDD' + `-${process.env.NODE_ENV}`, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('connected to MONGO')
  }
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', userRoutes)
app.use(errorHandler)

module.exports = app