const Item = require('../models/item');
exports.items_get_single = (req,res)=>{
    res.status(200).json({
        message: "GET item by item ID: "+req.params.itemID,
        data: {
            name: "Item name",
            description: "Item description",
            price: 12.95,
            restaurantID: 'RestaurantID'
        }
    })
}

exports.items_new = async (req,res)=>{
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        restaurant: req.body.restaurantID
    })
    try {
        const newItem = await item.save();
        res.status(201).json({
            message: "Item created successfully",
            data: newItem
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}