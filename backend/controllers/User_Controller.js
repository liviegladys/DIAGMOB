
const mongoose = require('mongoose');
const Users = require('../models/Users');
    
module.exports={

  signup (req, res, next)  {
    
    const user = new Users({
    Nom:req.body.Nom ,
    Prenom:req.body.Prenom ,
    CreatedAt: req.body.CreatedAt,
    Mail: req.body.Mail,
    Reponse:req.body.Reponse
        });

        user.save((error,user)=>{
if (error){
  res.send(`Utilisateur non créé. Tous les champs doivent être complétés et  ${req.body.UserEmail} ne doit pas correspondre à compte existant`)
}else{
  console.log('compte creer avec succes');
}

        }) 
  },
  getUsers(req,res){// chercher  tous les utilisateurs et les envoie 
    Users.find()
    .then(users=>{
      res.send(users)
    })
  }

}

    
       
             
           
     
  
