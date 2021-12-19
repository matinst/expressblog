const express = require('express')
const v1Router = express.Router()
const studentsRouter = require('./students')


v1Router.use('/students' , studentsRouter)

module.exports = v1Router