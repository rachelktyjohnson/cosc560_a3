const express = require('express');
const router = express.Router();

//controller file
const ItemsController = require('../controllers/items');

//get item details by ID
router.get('/:itemID',ItemsController.items_get_single);

module.exports = router;