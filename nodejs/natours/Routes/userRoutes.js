const express = require('express');
const authController = require('../controller/authController');
// const userController = require('../controller/userController');
const router = express.Router();

// router.route('/signup').post(authController.signup);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post(
  '/forgotPassword',
  authController.forgotPassword
);
router.post('/resetPassword', authController.resetPassword);

// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.addUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
