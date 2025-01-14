import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const initialState = {
    cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")) :[],
    total:localStorage.getItem("total") ?JSON.parse(localStorage.getItem("total")):0,
    totalItems:localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")): 0,
    isAddedTocart:localStorage.getItem("isAddedToCart") ? JSON.parse(localStorage.getItem("isAddedTocart")): false,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action) => {
            const menu = action.payload
            
            const exixtingItem = state.cart.find((Item) => Item._id === menu._id)
            if(exixtingItem){
                // if item already exixt ,increase ist qauntity
                exixtingItem.quantity += 1;
                state.total += menu.price
                toast.success(`Increased quantity of ${menu.name} in the cart`);
                
                return;
            } else{
                state.cart.push({ ...menu, quantity: 1 });
                state.totalItems += 1;
                state.total += menu.price;
                toast.success(`${menu.name} added to the cart`);
            }


            // update to localstorage
            localStorage.setItem("cart",JSON.stringify(state.cart))
            localStorage.setItem("total",JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
            
        },

        // remove from the cart
        removeFromCart:(state, action)=> {
            const menuId = action.payload
            const index= state.cart.findIndex((item)=> item._id===menuId )

            if(index >= 0){
                state.totalItems -= state.cart
                state.total -= state.cart[index].price * state.cart[index].quantity
                state.cart.splice(index,1)

                localStorage.setItem("cart",JSON.stringify(state.cart))
                localStorage.setItem("total",JSON.stringify(state.total))
                localStorage.setItem("totalItems",JSON.stringify(state.totalItems))

                // show toast
                toast.success("Course removed from Cart")
            }

            
        },

        decreaseQuantityFromCart: (state, action) => {
            const menuId = action.payload;
            const existingItem = state.cart.find((item) => item._id === menuId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    state.total -= existingItem.price;
                    toast.success(`Decreased quantity of ${existingItem.name}`);
                } else {
                    state.cart = state.cart.filter((item) => item._id !== menuId);
                    state.total -= existingItem.price;
                    state.totalItems -= 1;
                    toast.success(`Removed ${existingItem.name} from the cart`);
                }
            }

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        },

        // reset cart
        resetCart: (state) => {
            state.cart = []
            state.total = 0
            state.totalItems = 0
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        }
    }
});

export const {addToCart,removeFromCart,resetCart,decreaseQuantityFromCart}= cartSlice.actions;
export default cartSlice.reducer;