const mongoose = require('mongoose')
const express = require('express')
const app = express()

const RegisterSchema = new mongoose.Schema({
    email : {
        type : String,
    },
    username : {
        type : String,
        unique : true
    },
    password : {
        
    }
})

module.exports = mongoose.model("register",RegisterSchema)