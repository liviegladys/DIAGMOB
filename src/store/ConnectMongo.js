import React from 'react';
//import mongoose from "mongoose";
//POUR GERER MONGODB
/*
const app = express();
const router = express.Router();
const express = require('express');
//*/
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//import mongoose = require("mongoose");
const Schema = mongoose.Schema;

////POUR GERER MONGODB
//const db = "mongodb+srv://InfernoDei:test1234@cluster0.8otpq.mongodb.net/InfernoDei?retryWrites=true&w=majority";
const db = "mongodb+srv://InfernoDei:juste1234@diagmob.is5vn.mongodb.net/questions?retryWrites=true&w=majority"

//*
mongoose.Promise = global.Promise;
//mongoose.connect(db,{ useNewUrlParser: true },{ useUnifiedTopology: true })
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log('OK pour mongoose'))
    .catch(err => console.log("pas bon pour mongoose"))
//*/

/*
let lstQuestionSchema = new Schema({    
        qst_id : Number,
        question : String,
        type : String,
        show : Boolean,
        categorie : String,
})

const lstQuestion = mongoose.model('questions', lstQuestionSchema)

//*/

console.log("juste un test avec mongoDB");

/*
const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});
//*/