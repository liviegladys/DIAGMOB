const lstAnswerIdentite=require('../models/lstAnswerIdentite');
const mongoose = require('mongoose');
const { db } = require('../models/lstAnswerIdentite');


  module.exports={
createlstAnswerIdentite(req,res,next){
    const lstAnswerIdentite = new LstAnswerIdentite({
    qst_id:req.body.qst_id,
    question:req.body.question ,
    answer:req.body.answer,
   
    })
   lstAnswerIdentite.save((err,lstAnswerIdentite)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }else{
            res.sendStatus(201)
        }
    })
},

  readlstAnswerIdentite(req, res, next) {
    db.collection("lstAnswerIdentite").find().toArray((err,lstAnswerIdentite)=>{// recuperer les données d' une collection 
        res.send(lstAnswerIdentite)
    })
    
  }
}