const express = require('express');
const router = express.Router();
const NotificationsController = require('../controllers/notifications');


/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */

/**
 * @swagger
 * path:
 *      /notifications/byuser/:UserID/:
 *          get:
 *              summary: GETs all notifications assigned to a particular user
 *              tags: [Notifications]
 *              parameters:
 *                - in: path
 *                  name: UserID
 *                  schema:
 *                      type: number
 *                  required: true
 *                  description: ID of the user
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: success message
 *                                      count:
 *                                          type: number
 *                                          description: count of all notifications returned
 *                                      data:
 *                                          $ref: '#/components/schemas/Notification'
 */
router.get('/byuser/:userID', NotificationsController.notifications_get_all_by_user);
/**
 * @swagger
 * path:
 *      /notifications/:
 *          post:
 *              summary: Create a new notification
 *              tags: [Notifications]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  userID:
 *                                      type: number
 *                                      description: ObjectID of the user the notification is going to
 *                                  content:
 *                                      type: string
 *                                      description: Contents of the notification
 *              responses:
 *                  "201":
 *                      description: Created
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/Notification'
 *
 */
router.post('/', NotificationsController.notifications_new);

/**
 * @swagger
 * path:
 *      /notifications/read/:userID:
 *          patch:
 *              summary: set all notifications of a certain userID to read
 *              tags: [Notifications]
 *              responses:
 *                  "200":
 *                      description: OK
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: object
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          description: OK message
 *                                      data:
 *                                          $ref: '#/components/schemas/Notification'
 *
 */
router.patch('/read/:userID', NotificationsController.notifications_read);

module.exports = router;