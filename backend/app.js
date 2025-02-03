const express = require('express');

const connectDB = require('./Config/Sever');
const app = express()
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log("port is running",process.env.PORT);
    connectDB()
    
})