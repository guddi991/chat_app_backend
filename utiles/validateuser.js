

const userValidate = (payload) => {
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
    
}

module.exports = {
    userValidate
}
