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
    }],
    imgSrc: {
        type: String,
        required: true
    },
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
 *          _id:
 *              type: string
 *              description: ObjectID of the restaurant
 *          name:
 *            type: string
 *            description: Name of the restaurant
 *          description:
 *            type: string
 *            description: Description of the restaurant's cuisine
 *          ratings:
 *            type: number
 *            description: number of ratings given
 *          stars:
 *            type: number
 *            description: Star rating of restaurant
 *          menu:
 *            type: array
 *            description: The menu of the restaurant using Items
 *            items:
 *              type: number
 *              description: ObjectID of itemID
 *          imgSrc:
 *            type: string
 *            description: SRC to static file
 */