import { mongoose } from 'mongoose';

const malattiaSchema = mongoose.Schema({
    certificato:{
        type: Buffer,
        required:true
    },
    dataInizio:{
        type: Date,
        required:true
    },
    dataFine:{
        type: Date,
        required:true
    } 
});

const Malattia = mongoose.model("malattia", malattiaSchema);

export default Malattia;