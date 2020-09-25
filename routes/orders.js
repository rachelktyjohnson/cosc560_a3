const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');
const Order = require('../models/order');

//controller file
//const OrdersController = require('../controllers/orders');

//get all orders (admin only)
router.get('/', checkAuthUser, checkAuthAdmin, async(req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200);
        res.json({
            message: "GET all orders",
            count: orders.length,
            data: orders
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

//GET: get an order (admin, user if the order belongs to you)
router.get('/:orderID', checkAuthUser, async (req, res)=>{
    try {
        const order = await Order.findById(req.params.orderID).populate('cart');
        res.status(200);
        res.json({
            message: "GET single order by ID: "+req.params.orderID,
            items: order.cart.length,
            data: order
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

//POST: create an order (user, with token)
router.post('/', checkAuthUser, async (req, res)=>{
    const order = new Order({
        user: req.body.user,
        cart: req.body.cart
    })
    try {
        const newOrder = await order.save();
        res.status(201).json({
            message: "Order created successfully",
            data: newOrder
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
})


//UPDATE: update an order (admin, with token)
router.patch('/:orderID', checkAuthUser, checkAuthAdmin, async(req,res)=>{
    const statuses = ["processing", "received", "delivered", "cancelled"];
    if (!statuses.includes(req.body.status)){
        res.status(404).json({
            message: "Not a valid status"
        })
    }
    try {
        let result = await Order.findOneAndUpdate(
            {_id:req.params.orderID},
            {status: req.body.status},
            {new:true}
        )
        res.status(200).json({
            message: "Order updated: "+result.status,
            data: result
        })
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

})

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */