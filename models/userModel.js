const  mongoose  = require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:"user"
    }

})


const users=mongoose.model('users',userSchema)


module.exports=users