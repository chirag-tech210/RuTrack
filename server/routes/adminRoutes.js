const express = require("express");
const { ObjectId } = require('mongodb');
const {authenticateJwt} = require("../middlewares/authenticate");
const {generateJwt} = require("../middlewares/authenticate");
const Admin  = require("../models/admin");
const Course = require("../models/course");
const router = express.Router();

router.post("/signup", (req, res) => {
    // logic to sign up admin
    const { username, password } = req.body;
    console.log(req.body);
    Admin.findOne({ username }).then((admin) => {
      if (admin) {
        res.status(409).json({ error: "Admin already exists." });
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
  
        newAdmin.save();
        const token = generateJwt(obj);
        res.json({ message: "Admins created successfully.", token });
      }
    });
  });
  
  router.get("/username",authenticateJwt,async(req,res)=>{
    res.json(req.user.username);
  });
  
  router.post("/login", async (req, res) => {
    // logic to log in admin
    const { username, password } = req.headers;
    console.log(req.headers);
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = generateJwt(admin);
      res.json({ message: "User login successfully.", token: token });
    } else {
      res.status(401).json({ error: "Invalid username or password." });
    }
  });
  
  router.post("/courses", authenticateJwt, async (req, res) => {
    // logic to create a course
    console.log(req.body);
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: "Course created successfully." });
  });
  
  router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
    // logic to edit a course
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
      new: true,
    });
    if (course) {
      res.json({ message: "Course updated successfully." });
    } else {
      res.json({ error: "Course not found." });
    }
  });
  
  router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  
    // logic to edit a course
    console.log(req.params.courseId);
    const course = await Course.findOne({_id:new ObjectId(req.params.courseId)});
    if (course) {
      res.json(course);
    } else {
      res.json({ error: "Course not found." });
    }
  });
  
  router.delete("/courses/:courseId", authenticateJwt, async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.courseId);
      if (course) {
        res.json({ message: "Course delete successfully." });
      } else {
        res.json({ error: "error in deleting the course." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occured while deleting the course." });
    }
  });
  
  router.get("/courses", authenticateJwt, async (req, res) => {
    // logic to get all courses
    const courses = await Course.find({});
    res.json({ courses });
  });

  module.exports = router;