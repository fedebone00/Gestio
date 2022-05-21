import { mongoose } from 'mongoose';

const dipendenteSchema = mongoose.Schema({
    nome:{
        type: String,
        required:true
    } ,
    cognome:{
        type: String,
        required:true
    },
    data:{
        type: Date,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    livello:{
        type: String,
        required:true
    } 
});

const Dipendente = mongoose.model("dipendente",dipendenteSchema)

export default Dipendente;