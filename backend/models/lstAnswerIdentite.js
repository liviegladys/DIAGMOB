const mongoose = require('mongoose'); //faire appel à mongoose
const bodyParser = require("body-parser");

const lstAnswerIdentiteSchema = new mongoose.Schema({// schema de données
    qst_id:  { type: Number, required: true },
    question: { type: String, required: true },
    answer:{type:String,required:true}
    
});



module.exports = mongoose.model('lstAnswerIdentite', lstAnswerIdentiteSchema);// exporter le schema de donnée dans mongoose