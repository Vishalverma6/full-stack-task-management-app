const jwt = require("jsonwebtoken");
require("dotenv").config();



// Auth
exports.auth = async(req, res, next) => {
    try{
        // extract the token
        console.log("vishal",req.cookies.token, req.header("Authorization"))
        const token = req.cookies.token 
                    || req.body.token 
                    ||req.header("Authorization")?.replace("Bearer ", "").trim();

                        console.log("Extracted Token:", token);
        // if token missing ,then send response
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing",
            });
        }

        // verify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log("Token decode ",decode);
            req.user=decode;
        }
        catch(error){
            // verification issue
            return res.status(401).json({
                success:false,
                message:"Token is Invalid",
                
            });
        }
        next();
    }
    catch(error){
        console.log("An error occurred while verifying the token ",error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while validating the token ",
        });
    }
}

// iSUser
// exports.isUser = async(req, res, next)=> {
//     try{
//         if(req.user.accountType !== "User"){
//             return res.status(401).json({
//                 success:false,
//                 message:"This is a protected route for User only",
//             });
//         }
//         next();
//     }
//     catch(error){
//         console.log("An error occurred while verifying the User ", error);
//         return res.status(500).json({
//             success:false,
//             message:"User role cannot be verified ,please try again later",
//         });
//     }
// }

// // isManager
// exports.isManager = async(req, res, next)=> {
//     try{
//         if(req.user.accountType !== "Manager"){
//             return res.status(401).json({
//                 success:false,
//                 message:"This is a protected route for Manager only",
//             });
//         }

//         next();
//     }
//     catch(error){
//         console.log("An error occurred while verifying the Manager Role ", error);
//         return res.status(500).json({
//             success:false,
//             message:"User role cannot be verified ,please try again later",
//         });
//     }
// }

// // isAdmin
// exports.isAdmin = async(req, res, next)=> {
//     try{
//         if(req.user.accountType !== "Admin"){
//             return res.status(401).json({
//                 success:false,
//                 message:"This is a protected route for Admin only",
//             });
//         }

//         next();
//     }
//     catch(error){
//         onsole.log("An error occurred while verifying the Admin Role ", error);
//         return res.status(500).json({
//             success:false,
//             message:"User role cannot be verified ,please try again later",
//         });
//     }
// }