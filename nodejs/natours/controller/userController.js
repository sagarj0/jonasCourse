const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    message: 'All users fetched successfully',
    data: { users },
  });
});

exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    message: 'User fetched successfully',
    data: { user },
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'this rote is not for passwprd updates, use update my password route',
        400
      )
    );
  }

  const filteredBody = filterObj(
    req.body,
    'name',
    'email',
    'photo'
  );

  const updated = await User.findByIdAndUpdate(
    req.user.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: { updated },
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    active: false,
  });

  res.status(204).json({
    status: 'success',
    message: 'User deleted successfully',
    data: null,
  });
});
