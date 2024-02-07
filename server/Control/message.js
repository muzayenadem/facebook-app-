const Usermodel = require("../Model/UserModel")
async function message(req,res){
    try {

        const {emailToSend,message,messegeFrom,name} = req.body
        console.log(emailToSend,message)
        
        const findExistingUser = await Usermodel.findOne({emailOrPhone:emailToSend})
        if(!findExistingUser)
        return console.log('user not exist')
         
        // findExistingUser.message.push(message)
        
        // const savingMessage = new Usermodel(findExistingUser)
        // savingMessage()

      const assure=   await Usermodel.updateOne({emailOrPhone:emailToSend},{$push:{message:{name:name,from:messegeFrom,text:message}}})
        console.log('succed')
        console.log(assure)
    } catch (error) {
        // res.status(500).json({error:''})
        console.log(error)
    }
}
    module.exports = message