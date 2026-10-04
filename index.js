const dns = require("dns");

dns.setServers(["1.1.1.1"]);

// loads dotenv file contents into process env by default
require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router = require('./Routes/route')
require('./dbConnect/db')
const jwtmiddleware=require('./Middleware/jwtMiddleware')
// craeting server instance
const server=express()

// enabling cors in server
server.use(cors())


// enabling json middleware
server.use(express.json())

// configuring router
server.use(router)


// setting up a port number
const port=process.env.PORT


// server.use(jwtmiddleware)


// start server to listen client request to that port / available server in internet
server.listen(port,()=>{
    console.log(`Server Started at ${port} & waiting for client requests`)
})

// resolving API (http://localhost:3000 get request) using express
server.get('/', (req, res) => {
    res.send("<h1>Server is running ! waiting for client for request</h1>")
})

// resolving API (http://localhost:3000/addbook POST request) using express
server.post('/addbook', (req, res) => {
    res.send("POST HIT")
})

server.get('/getbook',(req,res)=>{
    res.send("title:Aadujeevitham,price: 500,author: Benyamin").status(201)
})
server.get('/deletebook',(req,res)=>{
    res.status(200).json({"msg": "Book Deleted"})
})
