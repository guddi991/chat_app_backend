const { sequelize } = require("../config/db")


const loginS = async ( {email,password} ) => {
    try{
        const [result] = await sequelize.query(`SELECT * from users where email = "${email}"`)
        return result
    }catch(err){
        throw new Error(" Error Message : "+err);
    }
    
}

module.exports = {
    loginS
}