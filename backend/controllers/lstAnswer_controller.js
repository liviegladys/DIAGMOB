const lstAnswer=require('../models/lstAnswer');
const mongoose = require('mongoose');
const { db } = require('../models/lstAnswer');



  module.exports={
createlstAnswer(req,res,next){
    const lstAnswer = new LstAnswer({
    qst_id:req.body.qst_id,
    question:req.body.question ,
    answer:req.body.answer,
   
    })
   lstAnswer.save((err,lstAnswer)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }else{
            res.sendStatus(201)
        }
    })
},

  readlstAnswer(req, res, next) {
    db.collection("lstAnswer").find().toArray((err,lstAnswer)=>{// recuperer les données d' une collection 
        res.send(lstAnswer)
    })
    
  }
}