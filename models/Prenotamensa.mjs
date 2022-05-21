import { mongoose } from 'mongoose';

const prenotamensaSchema = mongoose.Schema({
    user_id:{
        type: String,
        required:true
    },
    prenotazione:{
        type: Boolean,
        required:false,
        default: false
    }
});

const PrenotaMensa = mongoose.model("prenotamensa", prenotamensaSchema);

export default PrenotaMensa;