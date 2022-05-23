const mongoose = require('mongoose')

 var imageSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required:true
    },
    desc:{ 
        type: String,
        required:true
    },img:
    {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('image', imageSchema);
module.exports = Image;