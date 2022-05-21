import { mongoose } from 'mongoose';

const ferieSchema = mongoose.Schema({
    motivazione:{
        type: String,
        required:true
    } ,dataInizio:{
        type: String,
        required:true
    } ,dataFine:{
        type: String,
        required:true
    }
});

const Ferie = mongoose.model("ferie",ferieSchema);

export default Ferie;
