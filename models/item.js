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
 *          id:
 *            type: ObjectID
 *            description: ID of item
 *          name:
 *            type: string
 *            description: Name of the food item
 *          description:
 *            type: string
 *            description: longer description of the food item
 *          price:
 *            type: number
 *            description: price of the food item in Number
 *          imgSrc:
 *            type: string
 *            description: refers to dist folder asset path
 */