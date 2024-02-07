const mongoose = require('mongoose')


const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const friendsModel = mongoose.model('friends',schema)
module.exports = friendsModel