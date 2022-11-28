const mysql = require('mysql2');




// create a databases connection and export it from this file 

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'sport-news'
}); 

connection.connect(function(err){
    if(err)console.log('Error to connect to database ',err)
    else console.log('Database connected') 
})