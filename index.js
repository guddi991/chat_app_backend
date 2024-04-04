
const dotenv = require('dotenv');
const db = require('./config/db')
const express = require('express')
const destructuring = require('./destructuring')
const app = express()
dotenv.config();


const PORT = process.env.PORT

db.ConnectDB();

app.listen(PORT,()=>{
    console.log(`hello server ${PORT}`)
})

