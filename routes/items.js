const express = require('express');
const router = express.Router();

//controller file
const ItemsController = require('../controllers/items');

/**
 * @swagger
 * path:
 *  /items/:ItemID/:
 *    get:
 *      summary: Gets a single item
 *      tags: [Items]
 *      parameters:
 *        - in: path
 *          name: ItemID
 *          schema:
 *            type: number
 *          required: true
 *          description: ID of the item
 *      responses:
 *        "200":
 *          description: An item schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Item'
 *
 */
router.get('/:itemID',ItemsController.items_get_single);

/**
 * @swagger
 * path:
 *  /items/:
 *    post:
 *      summary: Create a new item
 *      tags: [Items]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Item'
 *      responses:
 *        "201":
 *          description: An item schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Item'
 */
router.post('/',ItemsController.items_new);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Item management
 */