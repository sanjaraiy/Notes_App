const mongoose = require('mongoose');

//===================Create User Schema===================
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unqiue:true,
    },
    password:{
        type:String,
        required:true,
    },
    createdOn:{
        type:Date,
        default:new Date().getTime(),
    }
},{timestamps:true});


//=====================Create User Modal=================
const User = mongoose.model("User",userSchema);

module.exports = User;