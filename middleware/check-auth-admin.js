const User = require('../models/user');

module.exports = async (req, res, next)=>{
    console.log(req.userData.userID);
    const user = await User.findById(req.userData.userID).select('admin');
    console.log(user);
    if (user.admin){
        next();
    } else {
        return res.status(401).json({
            message: "Auth failed"
        })
    }
};