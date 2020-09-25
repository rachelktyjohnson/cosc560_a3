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
 *      responses:
 *        "200":
 *          description: An Item schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Item'
 */
router.get('/:itemID',ItemsController.items_get_single);
router.post('/',ItemsController.items_new);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Item management
 */