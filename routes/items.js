const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/items');


/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Item management
 */



/**
 * @swagger
 * path:
 *      /items/:
 *          get:
 *              summary: gets all items without images urls
 *              tags: [Items]
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
 *                                          $ref: '#/components/schemas/Item'
 *
 */
router.get('/', ItemsController.items_get_all);

/**
 * @swagger
 * path:
 *      /items/:ItemID/:
 *          get:
 *              summary: GETs a single item
 *              tags: [Items]
 *              parameters:
 *                - in: path
 *                  name: ItemID
 *                  schema:
 *                      type: number
 *                  required: true
 *                  description: ID of the item
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
 *                                          $ref: '#/components/schemas/Item'
 */
router.get('/:itemID', ItemsController.items_get_single);

/**
 * @swagger
 * path:
 *      /items/:
 *          post:
 *              summary: Create a new item
 *              tags: [Items]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                      description: name of item
 *                                  description:
 *                                      type: string
 *                                      description: description of the item
 *                                  price:
 *                                      type: number
 *                                      description: price of the item
 *                                  imgSrc:
 *                                      type: string
 *                                      description: pointer to item image file
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
 *                                          $ref: '#/components/schemas/Item'
 *
 */
router.post('/', ItemsController.items_new);

module.exports = router;
