const express= require("express");
const { signUp, login } = require("../contollers/Auth");
const router = express.Router();



// Routes for SignUp
router.post("/signup",signUp);

// routes for login

router.post("/login",login);

// Export the router for use in the main applicaion
module.exports=router;