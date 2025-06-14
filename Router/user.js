const {Router} = require("express");
const {usermodel,purchasemodel} = require("../db");
const userRouter = Router();
const jwt  = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("./config")

userRouter.post('/signup', async(req, res) => {
    const {email , password , firstName , lastName} = req.body;

    await usermodel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    }) 
    res.json({
        message:"Signup succeeded!"
    })


  })



  userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await usermodel.findOne({ email, password });
  
    if (!user) {
      return res.json({
        message: "Incorrect credentials"
      });
    }
  
    const token = jwt.sign({ id: user._id}, JWT_USER_PASSWORD);
    res.json({ token });
  });




  userRouter.post('/purchases', userMiddleware, async(req, res) => {


    const purchases = await purchasemodel.find({
      userId,
  });

  let purchasedCourseIds = [];

  for (let i = 0; i<purchases.length;i++){ 
      purchasedCourseIds.push(purchases[i].courseId)
  }

  const coursesData = await coursemodel.find({
      _id: { $in: purchasedCourseIds }
  })

  res.json({
      purchases,
      coursesData
  })

  })


  module.exports = {
    userRouter:userRouter
  }