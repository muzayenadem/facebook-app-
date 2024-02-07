const controls = require('../Control/TaskController')
const router = require('express').Router();
const login = require('../Control/login')
const users = require('../Control/users')
const register = require('../Control/register')
const friends = require('../Control/friends')
const getFriends = require('../Control/getFriends')
const loggedIn = require('../Control/loggedIn')

const message = require('../Control/message')
// middlewares
const auth = require('../Middleware/auth')

/// get router
router.route('/users').get(auth,users)
router.route('/videos').get(controls.videos)
router.route('/getfriends').get(auth,getFriends)
router.route('/logout').get((req,res)=>{
    res.cookie("token","",{
        httpOnly:true,
        expires:new Date(0)
    }).send();
    console.log('logged out')
})
router.route('/loggedin').get(loggedIn)


//router.route('/login/profile').get(controls.profile1)

//post router
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/friends').post(auth,friends)
router.route('/message').post(auth,message)
module.exports= router