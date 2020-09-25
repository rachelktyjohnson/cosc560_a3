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
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required:true
    }],
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
 *          user:
 *            type: User
 *            description: userID of the user associated with the order
 *          datetime:
 *            type: Date
 *            description: datetime of when the order was placed
 *          cart:
 *            type: Array of Items
 *            description: all items that were in the order
 *          status:
 *            type: String
 *            description: Status of the order (Processing, Received, Delivered, Cancelled)
 */