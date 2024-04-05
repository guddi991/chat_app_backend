
const { sequelize } = require("../config/db")
const allUsersService = async ()=>{
    const [users] = await sequelize.query(`SELECT * from users`)
    return users
}

module.exports = {
    allUsersService
}


// controller -

// service - DB related

// modules -  functions related