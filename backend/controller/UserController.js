const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User =require('../models/userModel')
// @desc Register a new user
// @route /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //Validation

  if (!name || !email || !password) {
    res.status(400);

    throw new Error('Please include all fields');
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
});

// @desc Login a user
// @route /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};
