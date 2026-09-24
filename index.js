// loads .env file content into process.env by default
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('../Routes/routes') 
require('../dbConnect/db')

// creating server instances
const server=express()

// enabling cors in server
server.use(cors())

// IMPLEMENTING JSON
server.use(express.json())

// CONFIGURNG ROUTER
server.use(router)

// SETTING UPTO PORT
const port=process.env.PORT

server.listen(port,()=>{
    console.log(`Server Started at ${port} & waiting for client rquest!`)
})

// resolving api(https://localhost:3000 get rquest using express)
server.get(`/`,(req,res)=>{
    res.send("<h1>Server is Running ! waiting for client requests!!</h1>")
})
server.post('/addbook',(req,res)=>{
    res.send('POST HIT')
})
server.get('/getbook',(req,res)=>{
    res.json({"title":"Goatlife","price":"120","author":"benyamin"}).statusCode(201)
})
server.delete('/deletebook',(req,res)=>{
     res.status(200).json({"msg":"Deleted"})
})
   