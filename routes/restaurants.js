const express = require('express');
const router = express.Router();

//controller file
const RestaurantsController = require('../controllers/restaurants');

/**
 * @swagger
 * path:
 *  /restaurants/:
 *    get:
 *      summary: Gets all restaurants without menu
 *      tags: [Restaurants]
 *      responses:
 *        "200":
 *          description: An array of restaurants without menu
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                      type: ObjectId
 *                      description: Mongoose objectID
 *                  name:
 *                      type: string
 *                      description: Name of restaurant
 *                  description:
 *                      type: string
 *                      description: Description of restaurant
 *                  ratings:
 *                      type: number
 *                      description: Number of restaurant ratings
 *                  stars:
 *                      type: number
 *                      description: Star rating of restaurant
 *
 */
router.get('/', RestaurantsController.restaurants_get_all);

/**
 * @swagger
 * path:
 *  /restaurants/:RestaurantID:
 *    get:
 *      summary: Get single restaurant with populated menu
 *      tags: [Restaurants]
 *      parameters:
 *        - in: path
 *          name: RestaurantID
 *          schema:
 *            type: number
 *          required: true
 *          description: ID of the restaurant
 *      responses:
 *        "200":
 *          description: Restaurant object with populated menu array
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                      type: ObjectId
 *                      description: Mongoose objectID
 *                  name:
 *                      type: string
 *                      description: Name of restaurant
 *                  description:
 *                      type: string
 *                      description: Description of restaurant
 *                  ratings:
 *                      type: number
 *                      description: Number of restaurant ratings
 *                  stars:
 *                      type: number
 *                      description: Star rating of restaurant
 *                  menu:
 *                      type: array
 *                      description: Array of item Objects
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: ObjectId
 *                                  description: Mongoose objectID
 *                              name:
 *                                  type: string
 *                                  description: Name of item
 *                              description:
 *                                  type: string
 *                                  description: Description of item
 *                              price:
 *                                  type: number
 *                                  description: Price of item
 *
 */
router.get('/:restaurantID', RestaurantsController.restaurants_get_single);

/**
 * @swagger
 * path:
 *  /restaurants/:
 *    post:
 *      summary: Create a new restaurant
 *      tags: [Restaurants]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Restaurant'
 *      responses:
 *        "201":
 *          description: A restaurant schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Restaurant'
 */
router.post('/',RestaurantsController.restaurant_new);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management
 */