const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        console.log("Hello");
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "jwtSecret");
        req.userData = decoded;
        // next();
    } catch (err) {
        return res.status(401).json({
            message: "Auth failed"
        })
    }
    //if successfully authenticated
    next();
};