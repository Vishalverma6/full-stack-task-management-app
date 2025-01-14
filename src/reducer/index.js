import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import cartReducer from "../slices/cartSlice"
import userReducer from "../slices/userSlice"
import menuReducer from "../slices/menuSlice"


const rootReducer = combineReducers({
    auth:authReducer,
    cart:cartReducer,
    user:userReducer,
    menu:menuReducer,

})
export default rootReducer