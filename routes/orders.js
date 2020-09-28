const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const OrdersController = require('../controllers/orders');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

/**
 * @swagger
 * path:
 *      /orders/:
 *          get:
 *              summary: gets all orders
 *              tags: [Orders]
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
 *                                          description: number of orders returned
 *                                      data:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/Order'
 *
 */
router.get('/', OrdersController.orders_get_all);

/**
 * @swagger
 * path:
 *      /orders/byuser/:UserID/:
 *          get:
 *              summary: GETs all orders assigned to a particular user
 *              tags: [Orders]
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
 *                                      count:
 *                                          type: number
 *                                          description: count of all orders returned
 *                                      data:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/Order'
 */
router.get('/byuser/:userID', OrdersController.orders_get_all_by_user);

/**
 * @swagger
 * path:
 *      /orders/:OrderID/:
 *          get:
 *              summary: GETs a single order by OrderID
 *              tags: [Orders]
 *              parameters:
 *                - in: path
 *                  name: OrderID
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: ID of the order
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
 *                                          $ref: '#/components/schemas/Order'
 */
router.get('/:orderID', OrdersController.orders_get_single);

/**
 * @swagger
 * path:
 *      /orders/:
 *          post:
 *              summary: Create a new order
 *              tags: [Orders]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  user:
 *                                      type: string
 *                                      description: ObjectID of the user placing the order
 *                                  cart:
 *                                      type: object
 *                                      items: {}
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
 *                                      data:
 *                                          $ref: '#/components/schemas/Order'
 */
router.post('/', OrdersController.orders_new);

/**
 * @swagger
 * path:
 *      /orders/:OrderID/:
 *          patch:
 *              summary: Update an order
 *              tags: [Orders]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                      description: ObjectID of order
 *                                  cart:
 *                                      type: string
 *                                      description: new cart of order
 *                                  status:
 *                                      type: string
 *                                      description: new status of order
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
 *                                          $ref: '#/components/schemas/Order'
 *
 */
router.patch('/:orderID', OrdersController.orders_update_single);

module.exports = router;

