const Usermodel = require('../Model/UserModel')
const VideoModel = require('../Model/videosmodel');
const bcrypt = require('bcrypt')


class Task {
    constructor(){

    }
    
    async register(req, res){
        try {
            const {firstName,lastName,emailOrPhone,password,birthDate,gender} = req.body
            const hashedPassword = await bcrypt.hash(password,10)
            Usermodel.find({})
            .then((result) =>{
                let find = result.find(res => res.emailOrPhone === emailOrPhone)
                if(find){
                        res.status(200).send('this account already exist')
                } else{
                    Usermodel.create({firstName,lastName,emailOrPhone,password:hashedPassword,birthDate,gender})
                    .then(data =>{
                        res.status(200).json(data)
                        console.log(data);
                        console.log(find)
                    })
                    .catch(err =>{
                        console.log(err.message);
                    })   
                }
            })
            .catch((err) =>{
                res.status(404).send({error:err.message})
            })
        } 
        catch (err){
            res.status(500).json({
                error : err.message
            })
        }
       
    }

// async profile1(req,res){
//  function profile(data){
//    return {data:data}
//   }
//   const {data} = profile()
//   res.status(200).send(data)
// }




    async videos(req,res){
        VideoModel.find({})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
const controls = new Task()
module.exports = controls