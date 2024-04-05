const { addUser } = require("../Services/registeruserservice");
const { sequelize } = require("../config/db");
const { userValidate } = require("../utiles/validateuser");


const userRegister= async (payload)=>{


    try{
        const validate = userValidate(payload);
        if(validate){
            return validate;
        }else{
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

