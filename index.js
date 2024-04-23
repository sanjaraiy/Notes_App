const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const jwt = require('jsonwebtoken');


const {authenticateToken} = require('./utilities');
const ConnectToMongoDB = require('./connection');
const userRouter = require('./routes/user');


env.config();

const app=express();
const PORT = 8080;

//============ DataBase Connection ============
const url = process.env.MONGO_DB_URL;
ConnectToMongoDB(url);



//============== Middleware Section ===========


app.use(express.json());
app.use(cors({origin : "*"}));




//=============== Routes Section =============
app.use('/',userRouter);






app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})