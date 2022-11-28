const conn = require ('../index'); 

module.exports={
getAll:function(callback){
    const sql = "SELECT * FROM `sport`"
    conn.query(sql,function(error,results){
        callback(error,results)
    })
},

add:function(title,blog,callback){
    const sql = 'INSERT INTO `sport` SET ?' ; 
   
    conn.query(sql,title,blog,function(error,results){
        callback(error,results)
    })
},
delete:function(id,callback){
 const sql=`DELETE FROM sport WHERE idsport = ${id} `; 
 conn.query(sql,id,function(error,result){
    callback(error,result)
 })
},
put:function(id,title,blog,callback){
    const sql = `UPDATE sport set title = (?),blog = (?)  WHERE idsport  =${id}  `;
    conn.query(sql,id,title,blog,function(error,result){
        callback(error,result)
    })
}




}