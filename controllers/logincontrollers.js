
const { loginS } = require('../services/loginservice')

const loginController = async (payload) =>{
    try{
        const result = await loginS(payload)
        console.log(result)
        if(result.length != 0){
           
            return result
        }else{

            return {"message":"email or password is not exists"}
        }
        
    }catch(err){
        throw new Error("Error Message : "+err)
    }
    
}

module.exports = {
    loginController
}