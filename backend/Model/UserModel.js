const mongoose = require('mongoose')

const UserSchema = mongoose.connect({
    username : {type : String},
    email : {type : String},
    password : {type : String}
})
const UserModel = mongoose.model('Users',UserSchema)
module.exports = UserModel