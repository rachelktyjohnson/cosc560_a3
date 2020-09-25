exports.items_get_single = (req,res)=>{
    res.status(200).json({
        message: "GET item by item ID: "+req.params.itemID,
        data: {
            name: "Item name",
            description: "Item description",
            price: 12.95,
            restaurantID: 'RestaurantID'
        }
    })
}