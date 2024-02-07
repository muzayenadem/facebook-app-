const friendsModel = require('../Model/freindsModel')

async function friends(req,res){
    try {
        const {name}= req.body

        const newFriend = new friendsModel({name})
        const savedFriend = await newFriend.save()
        console.log(savedFriend)
        res.status(200).send(savedFriend)
    } catch (error) {
        res.status(500).json({error:""})
    }
}
module.exports = friends