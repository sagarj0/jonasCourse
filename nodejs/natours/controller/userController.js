const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: { newUser },
  });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    message: 'All users fetched successfully',
    data: { users },
  });
};
