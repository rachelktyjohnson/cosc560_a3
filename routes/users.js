const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

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