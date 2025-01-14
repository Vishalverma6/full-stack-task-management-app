const mongoose = require("mongoose");


const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category: {
        type: String,
        enum: ['Appetizers', 'Main Course', 'Desserts', 'Starter',],
      },
      price: {
        type: Number,
        required: true,
      },
      availability: {
        type: Boolean,
        default: true, 
      },
})

module.exports= mongoose.model("Menu",menuSchema);