const User = require("../model/User");
const { getuser } = require("../service/auth")


function checkForAuthentication(req,res,next) {
    
    const Useruid  = req.cookies?.uid
     req.user = null
    if(!Useruid) return next()
        
        const user = getuser(Useruid)
     req.user = user
    next();
}
 function restrict(roles=[]) {

    return function (req,res,next){
     if (!req.user) return res.redirect("/Login")
    // const Useruid  = req.cookies?.uid   
    // const user = getuser(Useruid)
     if (!roles.includes(req.user.role)) return res.end("unauthorized")   
    //  req.user = user
         return  next();
    }
}
module.exports = {
    checkForAuthentication,
    restrict
}