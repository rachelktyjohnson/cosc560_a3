const express = require('express');
const router = express.Router();

//controller file
const NotificationsController = require('../controllers/notifications');

//POST: create new notification
router.post('/', NotificationsController.notifications_new);

//PATCH: update notification (set to read)
router.patch('/:notificationID', NotificationsController.notifications_read);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */