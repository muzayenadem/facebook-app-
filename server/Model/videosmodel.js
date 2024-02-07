const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:{
        type:String,
    },
    duration:{
        type:String
    }
})
const VideoModel = mongoose.model('Videos',schema)
module.exports = VideoModel