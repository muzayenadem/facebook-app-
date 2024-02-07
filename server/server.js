const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')


dotenv.config({path: './config.env'})
const router = require('./Router/rout')




 const app = express()
 //All middlewares
 app.use(express.urlencoded({extended: true}))
 app.use(express.json())
 app.use(cors({
  origin:['http://localhost:5174','http://localhost:5173'],
  credentials:true
 }))
 app.use(cookieParser())
 app.use(router)




 mongoose.connect(process.env.DATABASE1)
 .then(()=>{
  console.log('database connected')
 })
 .catch((err)=>{
  console.log(err.message);
 })


const PORT = process.env.PORT || 9910

  app.listen(PORT,()=>{
    console.log( `server is started on ${PORT}`)
  })