const express = require('express'); 

const router = express.Router(); 

const {getAllSport,addSport,deleteSport,updateSport} = require('../controllers/sport-news')

//GET request to fetch all sport 
router.get('/getAll',getAllSport)

//POST reqest to add new news 
router.post('/add',addSport)

//DELTE REQEST to delete news 
router.delete('/delete/:id',deleteSport)

//updata reqest to modfier news 
router.put('/update/:id',updateSport)






module.exports= router ; 