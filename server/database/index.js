const mysql = require('mysql2');
const config = require ('config');



// create a databases connection and export it from this file 

const connection= mysql.createConnection(config); 

connection.connect(function(err){
    if(err)console.log('Error to connect to database ',err)
    else console.log('Database connected') 
})