const Menu = require("../models/Menu")


// fetch all menu Items 
exports.getAllMenuItems = async(req, res) => {
    try{

        const menuItems = await Menu.find({});
        return res.status(200).json({
            success:true,
            message:"Fetch all menu Items Successfully",
            data:menuItems,
        });
    }
    catch(error){
        console.log("An error occurred while fetching the all menu Items ",error);
        return res.status(500).json({
            success:false,
            message:"Cannot Fetch all menu Items, please try again",
            error:error.message,
        });
    }
}

// Adding a new Menu Item
exports.addNewMenuItem = async(req, res) => {
    try{
        

        // fetch the data from req body
        let {
            name,
            category,
            price,
            availability,
        } = req.body;


        if (!name || !category || !price) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        if (availability === undefined || availability === null) {
            availability = true;
        }
        
        const newMenu = await Menu.create({
                                    name,category,
                                    price,
                                    availability,
                                });

        // return response 
        return res.status(200).json({
            success:true,
            message:"Menu Created Successfully",
            data:newMenu,
        });
    }
    catch(error){
        console.log("An error occurred while creating menu ",error);
        return res.status(500).json({
            success:false,
            message:"Course creation Failed, please try again",
        });
    }
}

// upadte a menu
exports.updateMenu =async(req, res) => {
    try{
        // fetching the data from req body
        const { menuId } = req.body;
        console.log("Menu Id ",menuId)
        const { name, category, price, availability } = req.body;

        // validation 
        if(!menuId){
            return res.status(404).json({
                success:false,
                message:"Menu id is required",
            })
        }

        // if (availability === undefined || availability === null) {
        //     availability = true;
        // }

        // update in Database
        const updatedMenuItem = await Menu.findByIdAndUpdate(menuId, {
            name,
            category,
            price,
            availability
        }, { new: true });

        if (!updatedMenuItem) {
            return res.status(404).json({
                success: false,
                message: 'Menu item not found',
            });
        }

        return res.status(200).json({
            success: true,
            message:"Menu Item update  Successfully ",
            data: updatedMenuItem
        });

        
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server error, Updation of menu Failed",
            error: error.message,
        })
    }
}

// delete Menu
exports.deleteMenu = async(req, res) => {
    try{
        // fetching the data from req body
        const {menuId} = req.body;
        console.log("Menu Id ",menuId)

        // Validation
        if (!menuId) {
            return res.status(400).json({
                success: false,
                message: 'Menu ID is required',
            });
        }
        
        // delte the Menu
        await Menu.findByIdAndDelete(menuId);

        // return response 
        return res.status(200).json({
            success:true,
            message: "Menu Deleted successfully",
        })
    }
    catch(error){
        console.error("An error occurred while deleting the Menu",error);
        return res.status(500).json({
            success: false,
            message: "Server error, Failed to delete Menu",
            error: error.message,
        })
    }
}
