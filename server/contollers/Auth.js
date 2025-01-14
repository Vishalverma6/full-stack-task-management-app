const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// sign up
exports.signUp = async(req, res) => {
    try{
        // data fetch from the request body
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            confirmPassword,
    
        } = req.body;

        // validation
        if(!firstName || !lastName || !password ||!email || !confirmPassword || !userName) {
                return res.status(401).json({
                    success:false,
                    message:"All fields are Required",
                })
            }

        // check for matching for Password  and ConfirmPassword 
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and confirmpassword  does not Match, Plese try again ",
            });
        }

        // Verify if the user already exists in the system
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User is already registered",
            });
        }

        // verify if the userName already Taken
        const existingUserName = await User.findOne({userName});
        if(existingUserName){
            return res.status(400).json({
                success:false,
                message:"UserName is already Taken, Create another one ",
            });
        } 

        // hash passowrd
        const hashedPassword = await bcrypt.hash(password,10);

        // entry creation in db
        const user = await User.create({
                    firstName,
                    lastName,
                    userName,
                    email,
                    
                    password:hashedPassword,
        });

        // return response 
        return res.status(200).json({
            success:true,
            message:"Signup Successful, Please Login",
            data:user,
        });


    }
    catch(error){
        console.log("An error Occurred During the signUp Process",error);
        return res.status(500).json({
            success:false,
            message:"User cannot be registered,Please try again",
        });
    }
}

// login
exports.login = async(req, res) => {
    try{
        // get data from the req body
        const {userName,password}=req.body;

        // validation of data
        if(!userName || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required ,please try again",
            });
        }
        
        console.log("vishal verma ")
        // check for the valid User
        const user = await User.findOne({userName});
        if(!user) {
            return res.status(401).json({
                success:false,
                message:"User is not registered ,Please signup first",
            });
        }

        // generate Jwt ,after password matching 
        if(await bcrypt.compare(password, user.password)){

            const payload = {
            userName: user.userName,
                id: user._id,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            user.token=token;
            user.password=undefined;

            // creating a cookie and sending the response 
            const options ={
                expires:new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged In successfully",
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error){
        console.log("An error Occurred during the login ",error);
        return res.status(500).json({
            success:false,
            message:"Login Failure ,Please try again",
        });
    }
}