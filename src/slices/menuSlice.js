import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    menuItems: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
}

const menuSlice = createSlice({
    name: "menu",
    initialState:initialState,
    reducers:{
        setMenuItem(state, action){
            state.menuItems = action.payload;
        },
        addMenuItem(state, action) {
            state.menuItems.push(action.payload)
        },
        removeMenuItem(state, action){
            state.menuItems = state.menuItems.filter((item) => item.id !== action.payload)
        }
    }
})


export const {setMenuItem, addMenuItem, removeMenuItem }= menuSlice.actions;
export default menuSlice.reducer;