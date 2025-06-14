require('dotenv').config()
const express = require('express')
const {userRouter} = require("./Router/user")
const{courseRouter} = require("./Router/course")
const {adminRouter}  = require("./Router/admin")
const mongoose = require('mongoose');

const app = express()
app.use(express.json());

app.use("/api/v1/user" , userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);



async function main() {
    try {
      await mongoose.connect(process.env.Mongo_url);
      console.log("Connected to MongoDB");
      app.listen(3000, () => {
        console.log("Server listening on port 3000");
      });
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  }
  
  main();
