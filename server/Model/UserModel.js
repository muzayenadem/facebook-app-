const mongoose =  require("mongoose");

const schema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    emailOrPhone:{
        type:String || Number,
    },
    birthDate:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    message:{
        type:Array,
        required:false
    }
})
const Usermodel = mongoose.model('FaceBookUser',schema)
module.exports = Usermodel