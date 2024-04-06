const { addUser } = require("../Services/registeruserservice");
const { sequelize } = require("../config/db");
const { userValidate } = require("../utiles/validateuser");
const passwordhash= require('password-hash')

const userRegister= async (payload)=>{


    try{
        const validate = userValidate(payload);
        if(validate){
            
            return validate;
        }else{
            const { password } = payload
            const hashpassword = passwordhash.generate(password)
            payload.password = hashpassword
            
            const result = await addUser(payload);

            return result;
        }
        
    }catch(err){
        throw new Error("Error"+err);
    }
    
}

module.exports={
    userRegister
}

