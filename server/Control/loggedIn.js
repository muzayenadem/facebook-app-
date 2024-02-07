// const { config } = require('dotenv')
const jwt = require('jsonwebtoken')


async function loggedIn(req,res){
 try {
    const token = req.cookies.token
    console.log({token:token})
    if(!token) return res.json(false)
/** we need to use the followed code to athonticate the token has made from our password of config.env.PASSWORD */
   //  const assure = jwt.verify(token,config.env.PASSWORD)
   // console.log(assure)
   // if(assure) return res.json(true)
   else
   res.json(true)
 } catch (error) {
   console.log('no token')
    res.json(false)
 }
}
module.exports = loggedIn