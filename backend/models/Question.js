const mongoose = require('mongoose'); //faire appel à mongoose
const bodyParser = require("body-parser");

const QuestionSchema = new mongoose.Schema({// schema de données
    qstid:  { type: Number, required: true },
    question: { type: String, required: true },
    type: { type: String, required: true },
    show: { type: Boolean, required: true },
    affiche: { type: Array },
    categorie: { type: String, required: true },
});

module.exports = mongoose.model('Question', QuestionSchema);// exporter le schema de donnée dans mongoose
