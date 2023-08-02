const mongoose = require('mongoose')
const express = require('express')
const app = express()

const LoginSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        
    }
})

module.exports = mongoose.model("login",LoginSchema)