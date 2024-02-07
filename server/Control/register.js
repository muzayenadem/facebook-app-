const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')


dotenv.config({path: './config.env'})
const Usermodel = require('../Model/UserModel');
const UserModel = require('../Model/UserModel')
const bcrypt = require('bcrypt')

const register = async(req,res)=>{
    try {
        //getting the users input from req.body
        const {firstName,lastName,emailOrPhone,password,birthDate,gender} = req.body
      
      
        if(!firstName || !lastName || !emailOrPhone || !password)
        return res
        .status(400)
        .json({error: "please fill all required data"
           });
         
           
           if(password.length < 6)
           return res
        .status(400)
        .json({error:'please sufficient password'});

      // Gettin the user from database if exists 
      const existingUser = await Usermodel.findOne({emailOrPhone})

      if(existingUser)
      return res
    .status(200)
    .send({error:'this email is already exist '})

   // Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    console.log(hashedPassword)

    // UserModel.create({
    //     firstName,
    //     lastName,
    //     emailOrPhone,
    //     password:hashedPassword,
    //     birthDate,
    //     gender
    // }).then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })



   // Saving the user into database
    const newUser = new Usermodel({
        firstName,
        lastName,
        emailOrPhone,
        password:hashedPassword,
        birthDate,
        gender
    })
  const savingUser = await newUser.save()



  // Getting the token of users by using jsonwebtoken
 const token = jwt.sign(
    {
    token:savingUser._id
 },
 process.env.PASSWORD
 )

 // sending cookies
 res.cookie('token',token,{
    httpOnly: true
 }).send()

    } catch (error) {
        console.log(error)
    }
    
}

module.exports = register