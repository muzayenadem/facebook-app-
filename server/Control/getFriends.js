const freindsModel = require('../Model/freindsModel')

async function getFriends (req,res){
    try {

        const allFriends = await freindsModel.find({})
        res.json(allFriends)
    } catch (error) {
        res.status(401).json({erorr:error.message})
    }
}
module.exports = getFriends