const {Router} = require('express')
const { Signup, Login } = require('../Controller/UserController')


const UserRoute = Router()


UserRoute.post("/signup",Signup)
UserRoute.post("/login",Login)


module.exports = UserRoute