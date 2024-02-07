const jwt = require('jsonwebtoken')
async function auth(req,res,next){
    try {

        const token = req.cookies.token
        if(!token) return  res.status(401).json({error:"un authorized"})

        const verifyToken = jwt.verify(token,process.env.PASSWORD)
        req.user = verifyToken.user

        next()
    } catch (error) {
        res.status(401).json({error:"un authorized"})
    }
}
module.exports = auth