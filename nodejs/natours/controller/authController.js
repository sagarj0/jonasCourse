const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = jwt.sign(
    { id: newUser._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    token,
    data: { newUser },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new AppError('provide email and password', 400)
    );
  }

  const user = await User.findOne({ email }).select(
    '+password'
  );
  const correct = User.correctPassword(
    password,
    user.password
  );

  if (!user || !correct) {
    return next(
      new AppError('Incorrect email or password', 401)
    );
  }
});
