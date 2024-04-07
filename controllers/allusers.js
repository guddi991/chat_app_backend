const { allUsersService } = require("../services/getuserservice")
const jwt = require("jsonwebtoken")
const allUsers = async (req,res) =>{

    const bearerToken = req.headers.authorization;
    const AuthToken = bearerToken.split(" ")[1]
    if(!AuthToken){
        return res.status(401).send({"message":"Token Not Found"})
    }

    try{
        const isVerifyToken = jwt.verify(AuthToken,process.env.JWT_SECRET_KEY)
        try{
            if(isVerifyToken.id){
                console.log("AuthToken ", isVerifyToken)
                const result = await allUsersService()
                return res.status(200).send({"status":"true","message":result})
            }
        }catch(err){
            return res.status(500).send({"message":"some error"+err})
    
        }
    }catch(err){
        return res.status(500).send({"message":err.message})

    }
    
    
    
    
}

module.exports = {
    allUsers
}


