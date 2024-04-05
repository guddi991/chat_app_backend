const { addUser } = require("../Services/registeruserservice");
const { sequelize } = require("../config/db")


const userRegister= async (payload)=>{

    // try{
    //     const [result] = await sequelize.query(`Insert into users (firstname,lastname,gender,email,password) values ("Guddi","Yadav","female","guddi@gmail.com","guddi")`)
    //     console.log(payload)
    //     return {
    //         "message":"User Created."
    //     }
    
    // }catch(err){
    //     console.log("error message : "+err)
    // }

    if(!payload.firstname){
        return {"message":"first Name is required"};
    }
    else if(!payload.lastname){
        return {"message":"last name is required"};
    }
    else if(!payload.gender){
        return {"message":"gender is required"};
    }
    else if(!payload.email){
        return {"message":"email is required"}
    }
    else if(!payload.password){
        return {"messsage":"password is required."}
    }

    try{
        const result = await addUser(payload);
        return result;
    }catch(err){
        throw new Error("Error"+err);
    }
    
}

module.exports={
    userRegister
}

