const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');

const UserController = require('../controllers/users');

router.post('/signup', UserController.user_signup);
router.post('/login',UserController.user_login);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */