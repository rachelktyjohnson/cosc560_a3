const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');

const UserController = require('../controllers/users');

/**
 * @swagger
 * path:
 *  /users/signup:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.post('/signup', UserController.user_signup);

/**
 * @swagger
 * path:
 *  /users/login:
 *    post:
 *      summary: Logs in a user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema and token
 */
router.post('/login',UserController.user_login);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */