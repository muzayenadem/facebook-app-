const UserModel = require('../Model/UserModel')
const user =  async(req,res)=>{
    UserModel.find({})
    .then((data)=>{
      res.status(200).json(data)
        let find = data.find(find=> find.firstName === 'Muzayen')
        // console.log(find)
        //res.status(200).json(find)
    })
    .catch((err)=>{
        console.log(err.message);
    })
}
module.exports = user