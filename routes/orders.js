const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');
const Order = require('../models/order');

//controller file
const OrdersController = require('../controllers/orders');

/**
 * @swagger
 * path:
 *  /orders/:
 *    get:
 *      summary: Gets all orders without populated cart
 *      tags: [Orders]
 *      responses:
 *        "200":
 *          description: An array of orders without populated cart
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Order'
 *
 */
router.get('/', checkAuthUser, checkAuthAdmin, OrdersController.orders_get_all);


/**
 * @swagger
 * path:
 *  /orders/:UserID:
 *    get:
 *      summary: Gets all orders by UserID without populated cart
 *      tags: [Orders]
 *      responses:
 *        "200":
 *          description: An array of orders by UserID without populated cart
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Order'
 *
 */
router.get('/:userID', OrdersController.orders_get_all_by_user);

/**
 * @swagger
 * path:
 *  /orders/:OrderID/:
 *    get:
 *      summary: Gets a single order with populated cart
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: OrderID
 *          schema:
 *            type: number
 *          required: true
 *          description: ID of the order
 *      responses:
 *        "200":
 *          description: An item schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                      type: ObjectId
 *                      description: Mongoose objectID
 *                  user:
 *                      type: ObjectId
 *                      description: UserID of user
 *                  datetime:
 *                      type: date
 *                      description: Datetime the order was placed
 *                  cart:
 *                      type: array
 *                      description: Array of item Objects
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: ObjectId
 *                                  description: Mongoose objectID
 *                              name:
 *                                  type: string
 *                                  description: Name of item
 *                              description:
 *                                  type: string
 *                                  description: Description of item
 *                              price:
 *                                  type: number
 *                                  description: Price of item
 *
 *
 */
router.get('/:orderID', checkAuthUser, OrdersController.orders_get_single);

/**
 * @swagger
 * path:
 *  /orders/:
 *    post:
 *      summary: Create a new order
 *      tags: [Orders]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      responses:
 *        "201":
 *          description: An order schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Order'
 */
router.post('/', checkAuthUser, OrdersController.orders_new);

/**
 * @swagger
 * path:
 *  /orders/:OrderID:
 *    patch:
 *      summary: Update an order
 *      tags: [Orders]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  status:
 *                      type: string
 *                      description: processing, received, delivered, or cancelled
 *      responses:
 *        "200":
 *          description: An order schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Order'
 */
router.patch('/:orderID', checkAuthUser, checkAuthAdmin, OrdersController.orders_update_single);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */