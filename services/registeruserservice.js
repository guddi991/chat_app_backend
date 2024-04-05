const { sequelize } = require("../config/db")


const addUser = async ({firstname, lastname, gender, email, password}) => {
    try{
        const [result] = await sequelize.query(`INSERT INTO users (firstname,lastname,gender,email,password) Values ("${firstname}","${lastname}","${gender}","${email}","${password}")`)
        
        return result;
    }catch(err){
        throw new Error("message"+err)
    }
    
}

module.exports = {
    addUser
}