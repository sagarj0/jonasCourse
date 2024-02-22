const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have name'],
  },
  email: {
    type: String,
    required: [true, 'User must have email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Provide a vallid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'User must have password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
