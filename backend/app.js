const express = require('express');

const connectDB = require('./Config/Sever');
const UserRoute = require('./Routes/UserRoutes');
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",UserRoute)


app.listen(process.env.PORT,()=>{
    console.log("port is running",process.env.PORT);
    connectDB()
    
})