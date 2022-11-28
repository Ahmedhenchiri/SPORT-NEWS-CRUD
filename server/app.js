const express = require('express'); 
const cors =require('cors')
// create an express app
const app=express()


app.use(express.json());
app.use(cors())




//require application routee modules 
const sportNewsRoute = require('./routes/sport-news'); 

//Add routes to the mideleware 
app.use('/api/sportnews',sportNewsRoute)

//export the express app 
module.exports= app 
