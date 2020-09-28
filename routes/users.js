const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * path:
 *      /users/:
 *          get:
 *              summary: gets all users that are not admin
 *              tags: [Users]
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: OK message
 *                                      count:
 *                                          type: number
 *                                          description: number of users (not admin) returned
 *                                      data:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/User'
 *
 */
router.get('/', UserController.users_get_all);

/**
 * @swagger
 * path:
 *      /users/:userID/:
 *          get:
 *              summary: GETs a single user
 *              tags: [Users]
 *              parameters:
 *                - in: path
 *                  name: UserID
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: ID of the user
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: success message
 *                                      data:
 *                                          $ref: '#/components/schemas/User'
 */
router.get('/:userID', UserController.users_get_single);

/**
 * @swagger
 * path:
 *      /users/signup/:
 *          post:
 *              summary: Create a new user
 *              tags: [Users]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      description: email of new user
 *                                  password:
 *                                      type: string
 *                                      description: password of new user, will be hashed
 *                                  firstName:
 *                                      type: string
 *                                      description: first name of new user
 *                                  lastName:
 *                                      type: string
 *                                      description: last name of new user
 *                                  phoneNumber:
 *                                      type: string
 *                                      description: phone number of new user
 *                                  address:
 *                                      type: object
 *                                      properties:
 *                                          add1:
 *                                              type: string
 *                                              description: Address Line 1
 *                                          add2:
 *                                              type: string
 *                                              description: Address Line 2
 *                                          suburb:
 *                                              type: string
 *                                              description: Address suburb
 *                                          state:
 *                                              type: string
 *                                              description: Address state
 *                                          postcode:
 *                                              type: number
 *                                              description: Address postcode
 *                                  admin:
 *                                      type: boolean
 *                                      description: if new user is admin or not
 *              responses:
 *                  "201":
 *                      description: Created
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: Created message
 *                                      result:
 *                                          $ref: '#/components/schemas/User'
 *
 */
router.post('/signup', UserController.user_signup);

/**
 * @swagger
 * path:
 *      /users/login/:
 *          post:
 *              summary: Attempt to login
 *              tags: [Users]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      description: email of user logging in
 *                                  password:
 *                                      type: string
 *                                      description: password of user logging in
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: OK message
 *                                      token:
 *                                          type: string
 *                                          description: token for authentication later (not used in this version)
 *                                      user:
 *                                          $ref: '#/components/schemas/Notification'
 *
 */
router.post('/login',  UserController.user_login);

/**
 * @swagger
 * path:
 *      /users/:UserID/:
 *          patch:
 *              summary: Update a user
 *              tags: [Users]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      description: ObjectID of user
 *                                  email:
 *                                      type: string
 *                                      description: email of  user
 *                                  password:
 *                                      type: string
 *                                      description: password of user
 *                                  firstName:
 *                                      type: string
 *                                      description: first name of user
 *                                  lastName:
 *                                      type: string
 *                                      description: last name of user
 *                                  phoneNumber:
 *                                      type: string
 *                                      description: phone number of user
 *                                  address:
 *                                      type: object
 *                                      properties:
 *                                          add1:
 *                                              type: string
 *                                              description: Address Line 1
 *                                          add2:
 *                                              type: string
 *                                              description: Address Line 2
 *                                          suburb:
 *                                              type: string
 *                                              description: Address suburb
 *                                          state:
 *                                              type: string
 *                                              description: Address state
 *                                          postcode:
 *                                              type: number
 *                                              description: Address postcode
 *                                  admin:
 *                                      type: boolean
 *                                      description: if user is admin or not
 *              responses:
 *                  "200":
 *                      description: Updated
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: Updated message
 *                                      result:
 *                                          $ref: '#/components/schemas/User'
 *
 */
router.patch('/:userID', UserController.users_update_single);



module.exports = router;
