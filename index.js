
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db')
const express = require('express')
const destructuring = require('./destructuring')
const userregister = require('./controllers/user_register')
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT

db.ConnectDB();

app.use(bodyparser.json());

app.post('/register',async (req,res)=>{
    try{
        const result = await userregister.userRegister(req.body);
        return res.status(200).send({"status":"true","message":result})
    }catch(err){
        return res.status(500).send({"message":"some error"+err.message})
    }
    
})


app.listen(PORT,()=>{
    console.log(`hello server ${PORT}`)
})

