const mongoose = require('mongoose'); //faire appel à mongoose
const uniqueValidator = require('mongoose-unique-validator');



const UserSchema = mongoose.Schema({// schema de données
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    CreatedAt: { type:Date ,default:  Date.now},
    Mail: { type: String, required: true },
    Reponse:[]
    
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', UserSchema);// exporter le schema de donnée dans mongoose

