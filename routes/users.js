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
 *        "201":
 *          description: An item schema
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
 *      summary: Sends user login details and returns token
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      description: email/username for login
 *                  password:
 *                      type: string
 *                      description: password for login
 *      responses:
 *        "200":
 *          description: token for further auth
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                      type: string
 *                      description: token for later auth
 */
router.post('/login',UserController.user_login);

/**
 * @swagger
 * path:
 *  /users/:
 *    get:
 *      summary: Gets all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.get('/', UserController.users_get_all);

router.get('/:userID', UserController.users_get_single);



module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */