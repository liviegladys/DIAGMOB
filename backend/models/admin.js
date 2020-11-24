const mongoose = require('mongoose'); //faire appel à mongoose

const bcrypt= require('bcrypt');

const adminSchema = mongoose.Schema({// schema de données
    
    Mail: { type: String, required: true },
    Password:{type:String, required:true}
    
});



adminSchema.pre('save',async function(next){
    try{
        const salt=await bcrypt.genSalt(10);// augmenter les options du cryptage 
        const hash=await bcrypt.hash(this.Password,salt);//cryptage de mot de passe
        this.Password= hash;
     next()

    }catch(error){
        next(error);
    }
})
module.exports = mongoose.model('admin', adminSchema);// exporter le schema de donnée dans mongoose


