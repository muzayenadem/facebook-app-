const UserModel = require('../Model/UserModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const jwt = require('jsonwebtoken')
const  login = async (req,res)=>{
     try {
        const {emailOrPhone,password} = req.body
        
        if(!emailOrPhone || !password)
        res
       .status(400)
       .json({
        error:'please fill all required data'
       });
       // Getting the user from databse if exist

      /**
      we should response the 401 error method to client 
      but for now i will use 201 to comunicate with client
       * 
       */

       const existingUser = await UserModel.findOne({emailOrPhone})

       if(!existingUser)
       return res
       .status(201)
       .send('envalid email or password');



        // let validate password with bcrypt
       const ValidatePassword = await bcrypt.compare(password,existingUser.password) 
        console.log(ValidatePassword)
       if(!ValidatePassword)
       return res
       .status(401)
       .json({error:'envalid email or password'});
         

    //    if(ValidatePassword)
    //    return res
    //    .status(200)
    //    .send(existingUser)
        
       const token = jwt.sign({token:existingUser._id},process.env.PASSWORD)

       res.cookie('token',token,{
        httpOnly:true
       }).send()
       console.log(token)
      //  res.status(200).send('success')
     console.log(ValidatePassword)

     } catch (error) {
        res.status(500).json({
            error:''
        })
     }

    // UserModel.find({})
    // .then(result=>{
    //     const find = result.find(res => res.emailOrPhone === emailOrPhone)
    //     if(find){
    //         const isPasswordValid =  bcrypt.compare(find.password,password)
    //         if(isPasswordValid ){
    //             res.status(200).send(find)
    //             // this.profile1(find)
    //         }else{
    //             res.send('incorrect password')
    //         }
    //     }else{
    //         res.send('this account is not in database')
    //     }
    // })
    // .catch(err=>{
    //     res.status(404).send({error:err.message})
    // })
}
module.exports = login