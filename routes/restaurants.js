const express = require('express');
const router = express.Router();
const RestaurantsController = require('../controllers/restaurants');

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management
 */

/**
 * @swagger
 * path:
 *      /restaurants/:
 *          get:
 *              summary: gets all restaurants
 *              tags: [Restaurants]
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: OK message
 *                                      count:
 *                                          type: number
 *                                          description: number of items returned
 *                                      data:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/Restaurant'
 *
 */
router.get('/', RestaurantsController.restaurants_get_all);

/**
 * @swagger
 * path:
 *      /restaurants/:RestaurantID/:
 *          get:
 *              summary: GETs a single restaurant
 *              tags: [Restaurants]
 *              parameters:
 *                - in: path
 *                  name: RestaurantID
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: ID of the restaurant
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: success message
 *                                      data:
 *                                          $ref: '#/components/schemas/Restaurant'
 */
router.get('/:restaurantID', RestaurantsController.restaurants_get_single);


/**
 * @swagger
 * path:
 *      /restaurants/:
 *          post:
 *              summary: Create a new restaurant
 *              tags: [Restaurants]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                      description: name of restaurant
 *                                  description:
 *                                      type: string
 *                                      description: description of the restaurant
 *                                  ratings:
 *                                      type: number
 *                                      description: number of ratings received
 *                                  stars:
 *                                      type: number
 *                                      description: star rating
 *                                  menu:
 *                                      type: array
 *                                      items:
 *                                          type: string
 *                                      description: array of itemIDs
 *              responses:
 *                  "201":
 *                      description: Created
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: Created message
 *                                      data:
 *                                          $ref: '#/components/schemas/Restaurant'
 *
 */
router.post('/',RestaurantsController.restaurant_new);

module.exports = router;

