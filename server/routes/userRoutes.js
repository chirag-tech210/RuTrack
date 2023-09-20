const express = require("express");
const router = express.Router();
const { authenticateJwt, generateJwt } = require("../middlewares/authenticate");
const User = require("../models/user");
const Course = require("../models/course");
const {z} = require("zod");

const signupInput = z.object({
  username:z.string().min(3,"Username should be at least 3 characters long.").max(10,"Username should not exceed 10 characters."),
  password:z.string().min(8,"Password should be at least 8 characters long.").max(14,"Password should not exceed 14 characters."),
}); 

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const parsedInput = signupInput.safeParse(req.body);
  if(!parsedInput.success){
    res.status(411).json({error:parsedInput.error.issues[0]}); 
    return;
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;
  console.log(username, password);
  const user = await User.findOne({ username });
  if (user) {
    res.status(409).json({ error: "User already exist." });
  } else {
    const obj = { username, password };
    const newUser = new User(obj);
    newUser.save();
    token = generateJwt(obj);
    res.json({ message: "User created successfully.", token: token });
  }
});

router.post("/login", async (req, res) => {
  const parsedInput = signupInput.safeParse(req.headers);
  if(!parsedInput.success){
    res.status(411).json({error:parsedInput.error.issues[0]}); 
    return;
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = generateJwt(user);
    res.json({ message: "Successfuly login as a user", token: token });
  } else {
    res.status(401).json({ err: "username or password does not match." });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  // logic to list all courses
  const courses = await Course.find({ published: true });
  res.json({ courses });
});

router.post("/purchase/:courseId", authenticateJwt, async (req, res) => {
  // logic to purchase a course
  const course = await Course.findById(req.params.courseId);
  if (course) {
    console.log(req.user.username);
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.puchasedCourses.push(course);
      await user.save();
      res.json({ message: "Course purchased successfully." });
    } else {
      res.json({ error: "user not found." });
    }
  } else {
    res.json({ message: "course not found." });
  }
});

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    res.json(course);
  } else {
    res.json({ message: "course not found." });
  }
});

router.get("/purchasedCourses", authenticateJwt, async (req, res) => {
  // logic to view purchased courses
  console.log(req.user.username);
  const user = await User.findOne({ username: req.user.username }).populate(
    "puchasedCourses"
  );
  if (user) {
    res.json({ purchasedCourse: user.puchasedCourses || [] });
  } else {
    res.json({ err: "user not found." });
  }
});

router.get("/me",authenticateJwt,async(req,res)=>{
  res.send(req.user.username);
})

module.exports = router;
