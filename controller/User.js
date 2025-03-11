const User = require('../model/User')
//// const { v4: uuidv4 } = require('uuid');
const { setuser } = require('../service/auth');


async function handleSignup(req,res){

    const {name ,email ,password} = req.body
    User.create({
        name ,
        email,
        password
    })
    res.redirect("/")
}
async function handleLogin(req,res){
    const {email,password} = req.body
    const user = await User.findOne({email,  password})
    if (!user)
        return res.render("Login", {
          error: "Invalid Username or Password",
    });
    // const sessionId = uuidv4();
    const token = setuser(user)
    res.cookie("uid",token)
    res.redirect("/")
} 




module.exports={handleSignup,handleLogin}

