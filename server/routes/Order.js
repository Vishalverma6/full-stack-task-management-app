const express = require("express");
const { placeOrder, getAllOrder } = require("../contollers/order");
const { auth } = require("../middlewares/auth");
const router = express.Router();



// Place Order
router.post("/placeOrder",auth,placeOrder);

// fetch all orders
router.get("/getAllOrder",auth,getAllOrder);

// Export the router for use in the main applicaion
module.exports=router;