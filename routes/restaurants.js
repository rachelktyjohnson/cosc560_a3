const express = require('express');
const router = express.Router();

//get all restaurants
router.get('/',(req,res)=>{
    res.status(200).json({
        message: "GET a list of all restaurants",
        data: [
            {
                name: "Big B's",
                description: "Chicken, burgers, chips, American",
                ratings: 203,
                stars: 4.9
            },
            {
                name: "Rene's Pizza Place",
                description: "Pizza, pasta, Italian",
                ratings: 155,
                stars: 4.8
            }
        ]
    })
})

//get restaurant details by ID
router.get('/:restaurantID', (req,res)=>{
    res.status(200).json({
        message: "GET restaurant data by RestaurantID: "+req.params.restaurantID,
        data: {
            name: "Restaurant Name",
            description: "Restaurant Description",
            ratings: 10,
            stars: 4.5,
            menu: ['ItemID','ItemID','ItemID','ItemID']
        }
    })
})

module.exports = router;