const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String,
        required:true,
        unique:true,
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {type: String,required: true},
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    phoneNumber: {type:String, required: true},
    address: {
        add1: String,
        add2: String,
        suburb: String,
        state: String,
        postcode: Number
    },
    admin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema);
/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *          - firstName
 *          - lastName
 *          - phoneNumber
 *          - address
 *          - admin
 *        properties:
 *                  _id:
 *                      type: string
 *                      description: ObjectID of the user
 *                  email:
 *                      type: string
 *                      description: email/username of user
 *                  password:
 *                      type: string
 *                      description: Hashed password of user
 *                  firstName:
 *                      type: string
 *                      description: First name of user
 *                  lastName:
 *                      type: string
 *                      description: Last name of user
 *                  phoneNumber:
 *                      type: string
 *                      description: Phone number of user
 *                  admin:
 *                      type: boolean
 *                      description: Admin[true] or User[false]
 *                  address:
 *                      type: object
 *                      properties:
 *                          add1:
 *                              type: string
 *                              description: Address Line 1
 *                          add2:
 *                              type: string
 *                              description: Address Line 2
 *                          suburb:
 *                              type: string
 *                              description: Address suburb
 *                          state:
 *                              type: string
 *                              description: Address state
 *                          postcode:
 *                              type: number
 *                              description: Address postcode
 */