const {Router} = require('express');
const adminRouter = Router();
const {adminmodel, coursemodel} = require("../db")
const mongoose= require("mongoose");
const jwt = require("jsonwebtoken");
const {JWT_admin_password} = require("./config");
const {adminMiddleware} = require("../Router/middleware/admin")

adminRouter.post('/signup', async(req, res) => {
    
   const{email,password, firstName , lastName} = req.body;
   await adminmodel.create({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName
}) 
       res.json({
    message:"Signup succeeded!"
    })


  })



adminRouter.post('/signin', async(req, res) => {
  
    const {email,password} = req.body;

    const admin = await adminmodel.findOne({email , password});

    if(!admin){
        return  res.json({message :"Incorrect credentials!"});
    }

    const token = jwt.sign({
        id: admin._id
        },JWT_admin_password);
        res.json({token:token});

})

adminRouter.post('/course', adminMiddleware, async(req, res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    
    const course = await coursemodel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
  })

  adminRouter.put('/course', adminMiddleware ,async(req, res) => {

    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await coursemodel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
   

  })

  adminRouter.get('/course/bulk', async(req, res) => {
   
    const adminId = req.userId;

    const courses = await coursemodel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })

  })

module.exports = {
    adminRouter : adminRouter
}

