const users = require('../Models/userModel')
const bcrypt = require('bcrypt')
// http://localhost:3000/register + POST + {data}


// registration
exports.userRegister = async (req, res) => {
    console.log("Inside userRegister function");
    const { username, email, password } = req.body
    if (username && email && password) {
        try {
            const existingUser = await users.findOne({ email })
            if (existingUser) {
                res.status(400).json({ "msg": "User already exists" })
            }
            else {
                 const hashedPassword = await bcrypt.hash(password, 10)
                const response = await users.create({ username, email, password: hashedPassword})
                res.status(201).json({ response })
            }
        }
      catch(err){
        console.log(err)
        res.status(500).json({ "msg": "Internal Server Error" })
      }

    }

    else {
        res.status(400).json({ "msg": "Enter valid data" })
    }
}


// lOGIN
exports.userLogin = async (req, res) => {
    res.status(200).json({ "msg": "Success" })
}

// profile edits
exports.profileEdit = (req, res) => {
    res.status(200).json({ "msg": "Profile Edited" })
}