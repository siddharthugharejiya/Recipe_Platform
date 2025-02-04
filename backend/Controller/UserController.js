
const bcrypt = require('bcryptjs')
const UserModel = require('../Model/UserModel')

const Signup = async(req,res) =>{
         const {username,email,password} = req.body

         const hash = await bcrypt.hash(password,10)

       const data = await UserModel.create({
            ...req.body,
            password : hash
         })

         res.status(200).json(data)
         console.log(data);
         
}

const Login = async(req,res) =>{
        const {email,password} = req.body
        const userdata = await UserModel.findOne({email})
     try {
        if(!userdata)
            {
              return res.status(404).json("invalid Email")
            }
            
            const match = await bcrypt.compare(password,userdata.password)
     
            if(match == true)
            {
              return  res.status(200).json("User Login Successfully")
            }
            else{
              return  res.status(404).json("Wrong password")
            }
     } catch (error) {
        return res.status(404).json(error.message)
     }
      
        
}

module.exports = {Signup,Login}