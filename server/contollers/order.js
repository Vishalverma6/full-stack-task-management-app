const Menu = require("../models/Menu");
const Order = require("../models/Order");


// Place order
exports.placeOrder = async(req, res) => {
    try{
        // fetch the data from req body
        const {items} = req.body;
        // console.log("menuItems",items)
        const userId = req.user.id;

        // Validation
        if (!items|| items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Menu items are required',
            });
        }
        

        // calculate total amount and quantity
        let totalAmount = 0;
        const orderedItems = [];

        for(const item of items){
            const menuItem = await Menu.findById(item.menuItemId);

            if(!menuItem){
                return res.status(404).json({
                    success:false,
                    message:"Menu Item not Found"
                });
            }

            // calculate the price 
            const totalPrice = menuItem.price * item.quantity;
            totalAmount += totalPrice;
            
            // collection of menuItem and quantity
            orderedItems.push({
                menuItemId:menuItem._id,
                quantity: item.quantity,
            });
        }
        const newOrder = await Order.create({
            userId:userId,
            items:orderedItems,
            totalAmount,
        });

        return res.status(200).json({
            success:true,
            message:"Order Place Successfully",
            data: newOrder,
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to place order',
            error: error.message,
        });
    }
}


// fetch all order 
exports.getAllOrder = async(req,res) => {
    try{
        // fetching the data from req body
        const userId = req.user.id;

        // console.log("Middleware userId:", req.user);
        // console.log("userId..",userId)

        // validation
        if(!userId){
            return res.status(401).json({
                success:false,
                message:"User id not found ",
            });
        }

        // fetch all order
        const allOrder= await Order.find({userId:userId}).populate("items.menuItemId").exec();

        // return response
        return res.status(200).json({
            success: true,
            message:"All order Fetch Successfully ",
            data: allOrder,
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "order could not fehed",
            error: error.message,
        })
    }
}