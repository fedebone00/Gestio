// import { Binary } from 'mongodb';
import mongoose from 'mongoose';

 var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('image', imageSchema);

export default Image;