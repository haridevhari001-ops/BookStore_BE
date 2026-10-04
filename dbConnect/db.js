const mongoose=require('mongoose')

const connectionString=process.env.CONNECTION_STRING





mongoose.connect(connectionString,).then((res)=>{
    console.log("server connected with MongoDB Server")
}).catch((err)=>{
    console.log("MongoDB Server Connection Failed!")
    console.log(err)
})  