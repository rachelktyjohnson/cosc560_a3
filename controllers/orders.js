const Order = require('../models/order');


//router.get('/', OrdersController.orders_get_all);
exports.orders_get_all = async(req,res)=>{
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
}

//router.get('/byuser/:userID', OrdersController.orders_get_all_by_user);
exports.orders_get_all_by_user = async(req,res)=>{
    const userID = req.params.userID;
    try {
        const orders = await Order.find({user:userID});
        res.status(200);
        res.json({
            message: "GET all orders by User ID",
            count: orders.length,
            data: orders
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

//router.get('/:orderID', OrdersController.orders_get_single);
exports.orders_get_single = async (req, res)=>{
    try {
        const order = await Order.findById(req.params.orderID);
        res.status(200);
        res.json({
            message: "GET single order by ID: "+req.params.orderID,
            data: order
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

//router.post('/', OrdersController.orders_new);
exports.orders_new =  async (req, res)=>{
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
}

//router.patch('/:orderID', OrdersController.orders_update_single);
exports.orders_update_single = async (req,res)=>{
    try {
        let result = await Order.findOneAndUpdate(
            {_id:req.params.orderID},
            {status: req.body.status, cart: req.body.cart},
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

}