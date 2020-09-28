const Item = require('../models/item');

//router.get('/', ItemsController.items_get_all);
exports.items_get_all = async (req, res) => {
    try {
        const items = await Item.find().select('_id name description price');
        res.status(200);
        res.json({
            message: "GET all items without images",
            count: items.length,
            data: items
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

//router.get('/:itemID', ItemsController.items_get_single);
exports.items_get_single = async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemID);
        res.status(200);
        res.json({
            message: "GET single item by ID: " + req.params.itemID,
            data: item
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.items_new = async (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgSrc: req.body.imgSrc
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