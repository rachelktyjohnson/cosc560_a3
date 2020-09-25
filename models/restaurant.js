const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required:true
    }]
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
/**
 * @swagger
 *  components:
 *    schemas:
 *      Restaurant:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - ratings
 *          - stars
 *          - menu
 *        properties:
 *          name:
 *            type: string
 *            description: Name of the restaurant
 *          description:
 *            type: string of arrays
 *            description: Description of the restaurant's cuisine
 *          ratings:
 *            type: Number
 *            description: number of ratings given
 *          stars:
 *            type: Number
 *            description: Star rating of restaurant
 *          menu:
 *            type: Array of Items
 *            description: The menu of the restaurant using Items
 */