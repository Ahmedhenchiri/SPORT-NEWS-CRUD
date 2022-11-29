const conn = require ('../index'); 

module.exports={
getAll:function(callback){
    const sql = "SELECT * FROM `sport`"
    conn.query(sql,function(error,results){
        callback(error,results)
    })
},

add:function(title,body,imageUrl,callback){
    const sql = 'INSERT INTO `sport` SET ?' ; 
   
    conn.query(sql,title,body,imageUrl,function(error,results){
        callback(error,results)
    })
},
delete:function(id,callback){
 const sql=`DELETE FROM sport WHERE idsport = ${id} `; 
 conn.query(sql,id,function(error,result){
    callback(error,result)
 })
},
put:(body,id,callback)=>{
    const sql = `UPDATE sport SET title =?,body =?,imageUrl=?  WHERE idsport  =?;`;
    conn.query(sql,[body.title,body.body,body.imageUrl,id],function(error,result){
        callback(error,result)
    })
}




}