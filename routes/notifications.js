const express = require('express');
const router = express.Router();

//controller file
const NotificationsController = require('../controllers/notifications');

/**
 * @swagger
 * path:
 *  /notifications/:
 *    post:
 *      summary: Create a new notification
 *      tags: [Notifications]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Notification'
 *      responses:
 *        "201":
 *          description: An item schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Notification'
 */
router.post('/', NotificationsController.notifications_new);

/**
 * @swagger
 * path:
 *  /notifications/:NotificationID:
 *    patch:
 *      summary: Update a notification to READ
 *      tags: [Notifications]
 *      responses:
 *        "200":
 *          description: An notification schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Notification'
 */
router.patch('/:notificationID', NotificationsController.notifications_read);


router.get('/byuser/:userID', NotificationsController.notifications_get_all_by_user);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */