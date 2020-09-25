const User = require('../models/user');

module.exports = async (req, res, next)=>{
    const user = await User.findById(req.userData.userID).select('admin');

    if (user.admin){
        next();
    } else {
        return res.status(401).json({
            message: "Auth failed"
        })
    }
};