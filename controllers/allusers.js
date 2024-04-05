const { allUsersService } = require("../services/getuserservice")

const allUsers = async () =>{
    const result = allUsersService()
    try{
        return result
    }catch(err){
        console.log("error message"+err)
    }
    
}

module.exports = {
    allUsers
}