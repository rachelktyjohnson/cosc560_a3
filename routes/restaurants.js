const express = require('express');
const router = express.Router();

//controller file
const RestaurantsController = require('../controllers/restaurants');

//get all restaurants
router.get('/',RestaurantsController.restaurants_get_all);

//get restaurant details by ID
router.get('/:restaurantID', RestaurantsController.restaurants_get_single);

module.exports = router;