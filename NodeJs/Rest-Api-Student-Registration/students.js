const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
            type:String,
            required:true,
            unique:[true, "Email id already used"],
        },
    phone:{
        type:String,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;