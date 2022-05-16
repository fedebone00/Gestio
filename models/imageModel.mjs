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
 
//Image is a model which has a schema imageSchema
export default imageSchema 
//module.exports = new mongoose.model('Image', imageSchema);