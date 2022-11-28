
const app = require('./app') // import app file 
const db = require ('./database') // import databases folder 


const port = 5000;//setting the port and listening for conection 





app.listen(port,()=>{
    console.log(`your server lesteing in port ${port}`)
})