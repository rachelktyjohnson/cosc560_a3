const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');

//controller file
const OrdersController = require('../controllers/orders');

//get an order (admin, user if the order belongs to you)

//create an order (user, with token)

//update an order (admin, with token)