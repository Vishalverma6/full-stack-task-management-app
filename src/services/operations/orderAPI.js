import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { resetCart } from "../../slices/cartSlice";

const { orderEndpoints } = require("../apis");


const {
    PLACE_ORDER_API,
    GET_ALL_ORDER_API
}  = orderEndpoints;


export const orderPlace = async(items, token, dispatch,navigate) => {
    // console.log("menuItems,",item)
    const toastId= toast.loading("Loading...");
    let result =null;
    try{
        const response = await apiConnector("POST",PLACE_ORDER_API,items, {
            Authorization : `Bearer ${token}`, 
        })

        console.log("PLACE_ORDER_API PLACE_ORDER_API.....",response);

        if(!response?.data?.success){
            throw new Error("Could not Create Section")
        }

        toast.success(response?.data?.message || "Order placed Successfuly");
        dispatch(resetCart());
        navigate("/menu");
        
    }
    catch(error){
        console.log("PLACE_ORDER_API ERROR.....",error);
        toast.error(error?.response?.data?.message || error.message);
    }
    toast.dismiss(toastId);
    
}

export const getAllOrder = async(token)=> {
    // console.log("token2",token);
    const toastId= toast.loading("Loading...");
    let result =[];
    try{
        const response = await apiConnector("GET",GET_ALL_ORDER_API,null,{
            Authorization: `Bearer ${token}` 
        })
        console.log("GET_ALL_ORDER_API RESPONSE.....",response);

        if(!response?.data?.success){
            throw new Error("Could not Create Section")
        }
        toast.success(response?.data?.message || "All Order Fetched successfully");
        result = response?.data?.data;

    }
    catch(error){
        console.log("GET_ALL_ORDER_API ERROR.....",error);
        toast.error(error?.response?.data?.message || error.message);
    }
    toast.dismiss(toastId);
    return result;
}