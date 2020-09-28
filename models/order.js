const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    datetime: {
        type: Date,
        default: Date.now
    },
    cart: {
        type: {  },
    },
    status: {
        type: String,
        default: "processing"
    }
})

module.exports = mongoose.model('Order', orderSchema);
/**
 * @swagger
 *  components:
 *    schemas:
 *      Order:
 *        type: object
 *        required:
 *          - user
 *          - datetime
 *          - cart
 *          - status
 *        properties:
 *          _id:
 *            type: string
 *            description: ObjectID of the order
 *          user:
 *            type: string
 *            description: ObjectID of the user associated with the order
 *          cart:
 *            type: object
 *            description: all items that were in the order
 *            items: {}
 */