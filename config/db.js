
const { Sequelize } = require('sequelize')

const {DB_NAME, DB_USERNAME, DB_PASSWORD,DB_HOST} = process.env

const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD, {
        host: DB_HOST,
        dialect:'mysql',
});

const ConnectDB=async ()=>{
    
    try{
        await sequelize.authenticate();
        console.log("DB connection is good to go....")

    }catch(error){
        console.error('ERROR',error)
    }

};



module.exports={
    sequelize,
    ConnectDB,
}


