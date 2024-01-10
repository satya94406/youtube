import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./Sidebar_Slice"
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const AppStore = configureStore({
     reducer:{
        app:SidebarReducer,
        searchSlice : searchSlice,
        chat: chatSlice ,
     }
});

export default AppStore;