const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.token;

  const decoded = jwt.verify(token,JWT_USER_PASSWORD)

   if(decoded){
    
    req.user_id = decoded.id;
    next()
   }else{
    res.status(4003).json({message:"Authenticated failed"})
   }
   
}

module.exports = {
  userMiddleware:userMiddleware
};
