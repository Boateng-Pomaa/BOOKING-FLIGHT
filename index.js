const { request } = require('express')
const express = require('express')
const json = require('express')
const dotenv = require('dotenv').config()
 const flight = require("./router/flightRoute")
 const {errorHandler} = require('./middleware/errorMiddleware')
 const connectDB = require("./config/db")
var app = express()

connectDB()

app.use(json());
 app.use('/flight',flight)
 app.use(express.urlencoded({extended: false}))
 app.use(errorHandler)

 PORT = process.env.PORT || 3000

app.listen(PORT,() => console.log(`serving on port $(PORT)`))