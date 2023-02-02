const express = require("express")
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    key:{type:String, required:true},
    total_plays:{type:Number},
    unique_plays:{type:Number}
}
)

//create a collection
const Schemaplay =new mongoose.model("Schemaplay", schema);

module.exports = Schemaplay;
