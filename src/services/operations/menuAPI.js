import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { data } from "react-router-dom";

const { menuEndpoints } = require("../apis");


const {
    GET_ALL_MENU_API ,
    CREATE_MENU_API ,
    UPDATE_MENU_API ,
    DELETE_MENU_API 
} = menuEndpoints

// get all menu Items 
export const getAllMenuItems = async() => {
    const toastId = toast.loading("Loading...")
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_MENU_API,);

        console.log("GET_ALL_MENU_API API RESPONSE",response)

        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetch all menu items ")
        }
        result = response?.data?.data
        // toast.success(response?.data?.message || "Successfully fetched the menu")

    }
    catch(error){
        console.log("GET_ALL_MENU_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

// create menu
export const createMenuItem = async(data) => {
    const toastId = toast.loading("Loading...")
    let result = null
    console.log("vishalllllllll")
    try{
        const response = await apiConnector("POST",CREATE_MENU_API,data);

        console.log("CREATE_MENU_API API RESPONSE",response)

        if(!response.data.success){
            throw new Error (response?.data?.message || "unable to create Menu Item ")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully create  menu")

    }
    catch(error){
        console.log("CREATE_MENU_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

// update Menu
export const updateMenuItem = async(data,menuId) => {
    const toastId = toast.loading("Loading...");
    let result= null;
    try{
        const response = await apiConnector("POST",UPDATE_MENU_API,data, {menuId});
        console.log("UPDATE_MENU_API REPONSE.....",response);
        if(!response?.data?.success){
            throw new Error("Could not Update Menu Item")
        }

        toast.success(response?.data?.message || "Menu Item Updated");
        result = response?.data?.data;
        console.log("RESULT",result);
    }
    catch(error){
        console.log("UPDATE_MENU_API ERROR.....",error);
        toast.error(error?.response?.data?.message || error.message);
    }
    toast.dismiss(toastId);
    return result;
}

// delete menu
export const deleteMenuItem = async(menuId) => {
    const toastId = toast.loading("Loading...");
    let result= null;
    try{
        const response = await apiConnector("DELETE",DELETE_MENU_API, {menuId})

        console.log("DELETE_MENU_API RESPONSE .....",response);
        if(!response?.data?.success){
            throw new Error("Could not Delete menu Item")
        }
        toast.success(response?.data?.message || "Menu Item  deleted Successfully");
        result= response?.data?.updatedCourse;
    }
    catch(error){
        console.log("DELETE_MENU_API ERROR....",error);
        toast.error(error?.response?.data?.message || error?.message);
    }
    toast.dismiss(toastId);
    return result;
}
