import { createSlice } from "@reduxjs/toolkit";

const Sidebar_Slice = createSlice({
    name:"Navigation",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
        state.isMenuOpen = !state.isMenuOpen
    },
        CloseMenu:(state)=>{
        state.isMenuOpen = false ;
    }
}
})

export const {toggleMenu,CloseMenu} = Sidebar_Slice.actions;
export default Sidebar_Slice.reducer;
