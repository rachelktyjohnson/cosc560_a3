const express = require('express');
const router = express.Router();
const checkAuthUser = require('../middleware/check-auth-user');
const checkAuthAdmin = require('../middleware/check-auth-admin');

//controller file
const RestaurantsController = require('../controllers/restaurants');

/**
 * @swagger
 * path:
 *  /restaurants/:
 *    get:
 *      summary: Get a list of all restaurants
 *      tags: [Restaurants]
 *      responses:
 *        "200":
 *          description: An array of restaurant schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Restaurant'
 */
router.get('/', checkAuthUser, checkAuthAdmin, RestaurantsController.restaurants_get_all);

/**
 * @swagger
 * path:
 *  /restaurants/:RestaurantID/:
 *    get:
 *      summary: Gets a single restaurant
 *      tags: [Restaurants]
 *      responses:
 *        "200":
 *          description: A restaurant schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Restaurant'
 */
router.get('/:restaurantID', RestaurantsController.restaurants_get_single);

//for testing only, not in final
router.post('/',RestaurantsController.restaurant_new);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management
 */