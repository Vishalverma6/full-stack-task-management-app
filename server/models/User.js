const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    
    password:{
        type:String,
        required:true,
        trim:true,
    },
    token:{
        type:String,
    },
})

module.exports=mongoose.model("User",userSchema);