const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const register = new mongoose.Schema({
    username :{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    confirmpassword:{
        type:String,
        required:true,
        minlength:8
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})



//generating tokens
register.methods.generateAuthToken = async function(next){
    try{
        const user=this;
        const token = jwt.sign({_id:user.id.toString()},process.env.SECRET_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
    }catch(err){
        throw new Error(err)
    }
    }
    
    
    //Hashing password
    register.pre("save", async function(next){
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password,10);
            this.confirmpassword = await bcrypt.hash(this.confirmpassword,10);
            
            next();
        }
    })
    



//create a collection--

const Registration = mongoose.model("Registration", register);


module.exports = Registration;