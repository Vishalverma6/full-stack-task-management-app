
const express = require("express");
const { addNewMenuItem, updateMenu, getAllMenuItems, deleteMenu } = require("../contollers/Menu");
const router = express.Router();



// fetch all menu items 
router.get("/getAllMenuItems",getAllMenuItems);

// add new menu 
router.post("/addNewMenuItem",addNewMenuItem);

// update a menu 
router.post("/updateMenuItem",updateMenu);

// delete menu Item
router.delete("/deleteMenuItem", deleteMenu);

// Export the router for use in the main applicaion
module.exports=router;