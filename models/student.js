const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentNumber : {
        type: Number,
        required:true
    },
    studentNationalCode : {
        type: Number,
        required:true
    },
    studentName : {
        type: String,
        required:true
    },
    studentFamily : {
        type: String,
        required:true 
    },
    studentField : {
        type: String,
        required:true
    }
})

const Student = mongoose.model('student',studentSchema)

module.exports = Student