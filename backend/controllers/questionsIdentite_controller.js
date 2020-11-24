const questionsIdentite=require('../models/questionsIdentite');
const mongoose = require('mongoose');
const { db } = require('../models/questionsIdentite');


  module.exports={
createquestionsIdentite(req,res,next){
    const questionsIdentite = new QuestionsIdentite({
    qstid:req.body.qstid,
    question:req.body.question ,
    type: req.body.type,
    show: req.body.show,
   
    })
   questionsIdentite.save((err,questionsIdentite)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }else{
            res.sendStatus(201)
        }
    })
},

  readquestionsIdentite(req, res, next) {
    db.collection("questionsIdentite").find().toArray((err,questionsIdentite)=>{// recuperer les données d' une collection 
        res.send(questionsIdentite)
    })
    
  }
}