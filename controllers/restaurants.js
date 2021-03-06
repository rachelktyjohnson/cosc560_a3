const Restaurant = require('../models/restaurant');

//router.get('/', RestaurantsController.restaurants_get_all);
exports.restaurants_get_all = async (req,res)=>{
    try {
        const restaurants = await Restaurant.find().select('name description ratings stars imgSrc');
        res.status(200);
        res.json({
            message: "GET all restaurants without menu",
            count: restaurants.length,
            data: restaurants
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

//router.get('/:restaurantID', RestaurantsController.restaurants_get_single);
exports.restaurants_get_single = async (req,res)=>{
    try {
        const restaurant = await Restaurant.findById(req.params.restaurantID).populate('menu');
        res.status(200);
        res.json({
            message: "GET single restaurants by ID: "+req.params.restaurantID,
            data: restaurant
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

//for dev only. Not in final yet
//router.post('/',RestaurantsController.restaurant_new);
exports.restaurant_new = async (req,res)=>{
    const restaurant = new Restaurant({
        name: req.body.name,
        description: req.body.description,
        ratings: req.body.ratings,
        stars: req.body.stars,
        menu: req.body.menu
    })
    try {
        const newRestaurant = await restaurant.save();
        res.status(201).json({
            message: "Restaurant created successfully",
            data: newRestaurant
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}