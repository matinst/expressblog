const express = require('express');
const RegisterStudentController = require('../../../controllers/student/registerStudentController');
const studentRouter = express.Router()

studentRouter.post('/',RegisterStudentController.handle)

module.exports = studentRouter