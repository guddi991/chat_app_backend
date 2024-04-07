
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db')
const express = require('express')
const destructuring = require('./destructuring')
const userregister = require('./controllers/user_register')
const bodyparser = require('body-parser');
const { Sequelize } = require('sequelize');
const { allUsers } = require('./controllers/allusers');
const { loginController } = require('./controllers/logincontrollers')
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

app.get('/dashboard',async (req,res)=>{
    try{
        // const [users] = await db.sequelize.query(`SELECT * from users`)
        const result = await allUsers()
        return res.status(200).send({"status":"true","message":result})
    }catch(err){
        return res.status(500).send({"message":"some error"+err})
    }
})

app.post('/login',async (req,res)=>{
    try{
        const result =await loginController(req.body);
        console.log(result)
        return res.status(200).send({"status":"true","message":result})
    
    }catch(err){
        return res.status(500).send({"status":"false","message":err})
    }
})



app.listen(PORT,()=>{
    console.log(`hello server ${PORT}`)
})

