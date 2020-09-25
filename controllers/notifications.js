
const Notification = require('../models/notification');

exports.notifications_new = async (req,res)=>{
    const notification = new Notification({
        userID: req.body.userID,
        content: req.body.content,

    })
    try {
        const newNotification = await notification.save();
        res.status(201).json({
            message: "New Notification created successfully",
            data: newNotification
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

exports.notifications_read = async (req,res)=>{
    try{
        let result = await Notification.findOneAndUpdate(
            {_id:req.params.notificationID},
            {read:true},
            {new:true})
        res.status(200).json({
            message: "Notification read",
            data: result
        })
    }  catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

}