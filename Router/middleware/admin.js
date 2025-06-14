const jwt = require("jsonwebtoken");
const { JWT_admin_password } = require("../config");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;

  const decoded = jwt.verify(token,JWT_admin_password);

   if(decoded){
    
    req.admin_id = decoded.id;
    next()
   }else{
    res.status(403).json({message:"Authenticated failed"})
   }
   
}

module.exports = {
  adminMiddleware:adminMiddleware
};
