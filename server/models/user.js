const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  puchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;