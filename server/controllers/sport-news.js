//controller related to sportNews ressource 

const sportNews= require ('../database/Model/sport-news.js')

module.exports = {
    getAllSport:function(req,res){
        sportNews.getAll(function(err,result){
            if(err)res.status(500).send(err)
            else res.status(201).send(result)
        })
    },
    addSport:function(req,res){
        sportNews.add(req.body,function(err,result){
            if(err)res.status(500).send(err)
            else res.status(201).send(result)
        })
    },
    deleteSport:function(req,res){
      sportNews.delete(req.params.id,function(err,result){
        if(err)res.status(500).send(err)
        else res.status(201).send(result)
      })
    },
    updateSport:function(req,res){
        sportNews.put(req.body,req.params.id,function(err,result){
            if(err)res.status(500).send(err)
            else res.status(201).send(result)
        })
    }
}
