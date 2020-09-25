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
 *          - read
 *          - content
 *        properties:
 *          user:
 *            type: User
 *            description: UserID that notification is for
 *          read:
 *            type: Boolean
 *            description: whether the notification has been read or not
 *          content:
 *            type: String
 *            description: what the notification actually says
 *        example:
 *           user: [userID]
 *           read: false
 *           content: Your order is pending!
 */