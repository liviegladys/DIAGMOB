const express = require('express');
const bodyParser= require('body-parser')
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const fs = require('fs');

const routRoutes=require('./routes/rout');

mongoose.connect('mongodb+srv://Limousin:Limousin@cluster0.nxlpk.mongodb.net/DiagMob?retryWrites=true&w=majority',// connexion à la base de donnée
  { useNewUrlParser: true,
    useUnifiedTopology: true })
 
    mongoose.connection.once('open',()=>{
        console.log('connexion établie')
    })
.on('error',(error)=>{
    console.log('connexion echouée' + error)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

//   app.get("/api/Users", (req, res) => {
//     res.json({
//       response: "ok",
//       data: "data provenant de la BDD",
//     });
//   });

  app.use('/api', routRoutes);

  module.exports = app;
  