const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const crypto = require('crypto');

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
    role: req.body.role,
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
  const correct = user.correctPassword(
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

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'You do not have permission to perform this action',
          403
        )
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(
  async (req, res, next) => {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return next(new AppError("user doesn't exist", 404));
    }
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    const resetURl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to:
    ${resetURl}.\nIf you didn't forget your password, please ignore this email!`;

    try {
      await sendEmail({
        email: user.email,
        subject:
          'Your password reset token (valid for 10 min)',
        message,
      });

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(
        new AppError(
          'There was an error sending the email. Try again later!',
          500
        )
      );
    }
  }
);

exports.resetPassword = catchAsync(
  async (req, res, next) => {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(
        new AppError('Token is invalid or has expired', 400)
      );
    }

    // Update user's password and password confirmation
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;

    // Clear password reset token and expiration
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    // Save the user with the new password and passwordChangedAt property
    user.passwordChangedAt = Date.now();
    await user.save();

    // Generate JWT token for the user and send it in the response
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      message: 'Password reset successfully',
      token,
    });
  }
);

exports.updatePassword = catchAsync(
  async (req, res, next) => {
    //1) Get user from collection

    const user = await User.findById(req.user.id).select(
      '+password'
    );

    //2) Check if POSTed current password is correct

    const correctPassword = await user.correctPassword(
      req.body.passwordCurrent,
      user.password
    );

    if (!correctPassword) {
      return next(
        new AppError('Your current password is wrong', 401)
      );
    }

    //3) If so, update password

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    //4) Log user in, send JWT
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      message: 'Password updated successfully',
      token,
    });
  }
);
