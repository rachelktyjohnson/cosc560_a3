const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    read: {
        type: Boolean,
        default: false
    },
    content: {
        type: String,
        required: true
    },
    datetime: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Notification', notificationSchema);
/**
 * @swagger
 *  components:
 *    schemas:
 *      Notification:
 *        type: object
 *        required:
 *          - user
 *          - content
 *        properties:
 *          _id:
 *              type: number
 *              description: ObjectID of the item
 *          user:
 *            type: number
 *            description: ObjectID of the user the notification is for
 *          content:
 *            type: string
 *            description: what the notification actually says
 */