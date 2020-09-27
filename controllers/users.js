const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');



exports.user_login = async (req,res)=> {
    //see if we got a user
    const user = await User.findOne({email: req.body.email})
    try {
        if (!user) {
            res.status(401).json({
                message: "Auth failed"
            })
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                res.status(401).json({
                    message: "Auth failed"
                })
            }
            if (result) {
                const token = jwt.sign({
                        email: user.email,
                        userID: user._id
                    },
                    "jwtSecret",
                    {expiresIn: "1h"},
                )
                return res.status(200).json({
                    message: "Auth successful",
                    token: token,
                    user:user
                })
            } else {
                res.status(401).json({
                    message: "Auth failed"
                })
            }
        })
    }  catch(err) {
            res.status(500).json({
                error:err
            })
        }
}

//for testing reasons only. Won't be the actual app.
exports.user_signup = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Account already exists with this email"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phoneNumber: req.body.phoneNumber,
                            address: req.body.address,
                            admin: req.body.admin
                        })
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: "User created",
                                    result: result
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })

}

//TESTING ONLY. NOT DEPLOYED LIVE
exports.users_get_all = async (req,res)=>{
    try {
        const users = await User.find({admin: false});
        res.status(200);
        res.json({
            message: "GET all users",
            count: users.length,
            data: users
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.users_get_single = async (req,res)=>{
    try {
        const user = await User.findById(req.params.userID);
        res.status(200);
        res.json({
            message: "GET single user by ID: "+req.params.userID,
            data: user
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.users_update_single = async (req,res)=>{
    const userID = req.params.userID;
    const props = req.body;
    try{
        const user = await User.update({_id: userID}, props);
        res.status(200);
        res.json({
            message: "User updated!",
            data: user
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}