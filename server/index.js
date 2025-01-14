const express = require("express");
const app = express();
const database = require("./config/database")
const dotenv= require("dotenv");
const PORT= process.env.PORT || 4000 


const userRoutes = require("./routes/User");
const menuRoutes = require("./routes/Menu");
const orderRoutes = require("./routes/Order");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
// database Connection
database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:"*",
        // http://localhost:3000
        credentials:true,
    })
)

// Routes 
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/menu",menuRoutes);
app.use("/api/v1/order",orderRoutes);


// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )
// 



// default Route 
app.get("/", (req, res) => {
    return res.json({
        success:true,
        message: "Your server is up and running...",
    })
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})