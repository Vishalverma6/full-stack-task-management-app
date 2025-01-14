const BASE_URL= process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS 
export const endpoints ={
    SIGNUP_API :BASE_URL + "/auth/signup",
    LOGIN_API :BASE_URL + "/auth/login",
}

// Menu Endpoints
export const menuEndpoints = {
    GET_ALL_MENU_API :BASE_URL + "/menu/getAllMenuItems",
    CREATE_MENU_API : BASE_URL + "/menu/addNewMenuItem",
    UPDATE_MENU_API : BASE_URL + "/menu/updateMenuItem",
    DELETE_MENU_API : BASE_URL + "/menu/deleteMenuItem",
}

// order endpoints 
export const orderEndpoints = {
    PLACE_ORDER_API: BASE_URL + "/order/placeOrder",
    GET_ALL_ORDER_API : BASE_URL + "/order/getAllOrder"
}