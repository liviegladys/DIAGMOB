
const Question=require('../models/Question');
const mongoose = require('mongoose');
const { db } = require('../models/Question');
  module.exports={
createQst(req,res,next){
    const question = new Question({
    qstid:req.body.qstid,
    question:req.body.question ,
    type: req.body.type,
    show: req.body.show,
    affiche: req.body.affiche,
    categorie: req.body.categorie
    })
    question.save((err,question)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }else{
            res.sendStatus(201)
        }
    })
},
// Axe d' amelioration de creation de question :soit adapter la requete de creation pour que les questions soient créées dans la bonne collection (celle qui a été créee à la main )soit recréer toutes les questions une par une dans la collection créee par mongoose
  readQst(req, res, next) {
    db.collection("Question").find().toArray((err,question)=>{// recuperer les données d' une collection 
        res.send(question)
    })
    
  }
}