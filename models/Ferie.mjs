import { mongoose } from 'mongoose';

const ferieSchema = mongoose.Schema({
    id:{
        type: String,
        required:true
    },
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
