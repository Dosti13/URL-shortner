
// const sessionidMap = new Map();
const jwt = require("jsonwebtoken")
function setuser(user){
    // sessionidMap.set(id, user)    
  return jwt.sign({
        _id:user._id,
        eami:user.email,
        role:user.role,
    },process.env.JWT_SECRET_KEY)
}
function getuser(token){
 if(!token) return null 
    return jwt.verify( token, process.env.JWT_SECRET_KEY)
//  return sessionidMap.get(id)
}
module.exports = {
    setuser,
    getuser
}