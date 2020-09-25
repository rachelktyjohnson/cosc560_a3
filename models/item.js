const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema);
/**
 * @swagger
 *  components:
 *    schemas:
 *      Item:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - price
 *        properties:
 *          name:
 *            type: string
 *            description: Name of the food item
 *          description:
 *            type: string
 *            description: longer description of the food item
 *          price:
 *            type: Number
 *            description: price of the food item in Number
 */