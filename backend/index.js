const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const auth = require('./routes/auth')
const login = require('./routes/login')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api/auth/register',auth)
app.use('/api/auth/login',login)

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(console.log(`MongoDB connected`)).catch((err)=>{console.log(err);})


app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})