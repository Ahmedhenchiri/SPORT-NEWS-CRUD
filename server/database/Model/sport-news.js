const conn = require ('../index.js'); 

module.exports={
getAll:function(callback){
    const sql = "SELECT * FROM `sport`"
    conn.query(sql,function(error,results){
        callback(error,results)
    })
},

add:function(news,callback){
    const sql = "INSERT INTO `sport` SET ? "; 
    conn.query(sql,news,function(error,results){
        callback(error,results)
    })
},
delete:function(id,callback){
 const sql=`DELETE FROM sport WHERE id =${req.params.id}`; 
 conn.query(sql,id,function(error,result){
    callback(error,result)
 })
}



}