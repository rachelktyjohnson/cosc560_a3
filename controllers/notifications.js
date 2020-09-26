
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

exports.notifications_get_all_by_user = async(req,res)=>{
    const userID = req.params.userID;
    try {
        const notifications = await Notification.find({userID:userID});
        res.status(200);
        res.json({
            message: "GET all notifications by User ID",
            count: notifications.length,
            data: notifications
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.notifications_read = async (req,res)=>{

    try{
        let result = await Notification.updateMany(
            {userID:req.params.userID, read: false},
            {$set:{read:true}}
        )
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