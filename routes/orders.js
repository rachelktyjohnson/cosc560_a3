const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');
const Order = require('../models/order');

//controller file
const OrdersController = require('../controllers/orders');

//get all orders (admin only)
router.get('/', checkAuthUser, checkAuthAdmin, OrdersController.orders_get_all);

//GET: get an order (admin, user if the order belongs to you)
router.get('/:orderID', checkAuthUser, OrdersController.orders_get_single);

//POST: create an order (user, with token)
router.post('/', checkAuthUser, OrdersController.orders_new);

//UPDATE: update an order (admin, with token)
router.patch('/:orderID', checkAuthUser, checkAuthAdmin, OrdersController.orders_update_single);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */