const users=require('../models/userModel')
const bcrypt = require('bcrypt')
// http://localhost:3000/register + POST +(data)


// registretion
exports.userRegister=async (req,res)=>{
    console.log("Inside register controller function")
    const {username,email,password}=req.body
    if(username && email && password ){
        try{
            const existingUser = await users.findOne({ email })
            if(existingUser) {
                res.status(403).json({"msg":"User Already exist!!"})
            }
            else{
                const hashedPassword=await bcrypt.hash(password,10)
                const response = await users.create({ username, email, password:hashedPassword})
                res.status(201).json(response)
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    }
    else{
        res.status(400).json({"msg":"Enter valid data"})
    }
}

// res.status(201).json("POST HIT")

// login
exports.userLogin=(req,res)=>{
    res.status(200).json({"msg":"Success"})
}

// profile edit
exports.profileEdits=(req,res)=>{
    res.status(200).json("Profile")
}