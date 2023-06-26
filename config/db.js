
const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbURL = process.env.MONGO_URL

const conn = async () => {
    try {

        const dbConn = await mongoose.connect(dbURL, {
            connectTimeoutMS: 300000,
        });
            

        console.log('conectou ao banco!');

        return dbConn;
    } catch (error) {
        console.log(error);

    }
};
conn()
//connection
module.exports = conn;