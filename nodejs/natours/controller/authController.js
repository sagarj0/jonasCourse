const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

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

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    message: 'User logged in successfully',
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError(
        'you are not logged in, login to get access'
      ),
      401
    );
  }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist',
        401
      )
    );
  }

  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'User recently changed password! Please login again',
        401
      )
    );
  }

  req.user = freshUser;

  next();
});
