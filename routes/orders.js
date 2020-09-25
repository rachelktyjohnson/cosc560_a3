const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');

//controller file
const OrdersController = require('../controllers/orders');

//GET: get an order (admin, user if the order belongs to you)

//POST: create an order (user, with token)

//UPDATE: update an order (admin, with token)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */