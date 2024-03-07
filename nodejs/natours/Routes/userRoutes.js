const express = require('express');
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post(
  '/forgotPassword',
  authController.forgotPassword
);
router.patch(
  '/resetPassword/:token',
  authController.resetPassword
);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.get('/', userController.getAllUsers);
//   .post(userController.addUser);

router.get('/:id', userController.getUser);
router.patch(
  'updateMe',
  authController.protect,
  userController.updateUser
);
router.delete(
  '/deleteMe',
  authController.protect,
  userController.deleteUser
);

module.exports = router;
