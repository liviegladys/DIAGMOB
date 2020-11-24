const mongoose = require('mongoose'); //faire appel à mongoose
const bodyParser = require("body-parser");

const questionsIdentiteSchema = new mongoose.Schema({// schema de données
    qstid:  { type: Number, required: true },
    question: { type: String, required: true },
    type: { type: String, required: true },
    
});



module.exports = mongoose.model('questionsIdenite', questionsIdentiteSchema);// exporter le schema de donnée dans mongoose