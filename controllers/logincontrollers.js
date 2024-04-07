
const { loginS } = require('../services/loginservice')
const hashPassword = require('password-hash')
const jwt = require("jsonwebtoken")

const loginController = async (payload) =>{
    try{

        const result = await loginS(payload)
        if(result.length != 0){
           const hashedPassword = result[0].password;
           const isVerify = hashPassword.verify(payload.password,hashedPassword)

           if(isVerify){
            const token = jwt.sign(result[0],process.env.JWT_SECRET_KEY,{expiresIn:"30s"})
            console.log("token" + token)
            return { token }
           }
           else{
                return "Password is not valid";
           }
        }
        else{
            return "email doesn't exists";
        }
        
    }catch(err){
        throw new Error("Error Message : "+err)
    }
    
}

module.exports = {
    loginController
}