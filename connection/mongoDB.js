const mongoose = require("mongoose");
const express = require("express");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/nindra",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}
).then(()=>{
    console.log("Connected to databse...");
}).catch((e)=>{
    throw new Error(e)
})

