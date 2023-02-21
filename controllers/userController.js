const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// @desc Register new user
// @route POST /api/users
// @access PUBLIC

const user = require("../middleware/helpers/user");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user exists
  const userExists = await user.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create password
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "simple",
  })
  
});

module.exports = { registerUser };
