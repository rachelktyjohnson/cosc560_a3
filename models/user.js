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
 *          email:
 *            type: string
 *          password:
 *            type: string
 *          firstName:
 *            type: String
 *          lastName:
 *            type: String
 *          phoneNumber:
 *            type: String
 *          address:
 *            type: String
 *            description: nested into (Add1, Add2, Suburb, State, Postcode)
 *          admin:
 *            type: Boolean
 *            description: Admin[true] or User[false]
 *        example:
 *           email: tester@test.com
 *           password: TestPassword
 *           admin: false
 */