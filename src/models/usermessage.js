const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
     name:{
          type:String,
          required:true,
          minlength:3 
     },
     email:{
          type:String,
          required:true,
          unique:true,
          validate(value){
               if(!validator.isEmail(value)){
                    throw new Error("Invalid Email");
               }
          }
     },
     phone:{
          type:Number,
          required:true,
          unique:true,

     },
     message:{
          type:String
     }
     
})

const User = mongoose.model("User",userSchema);

module.exports = User;