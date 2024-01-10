import { createSlice } from "@reduxjs/toolkit";
import { Live_Chat_Count } from "./Helper";

const chatSlice = createSlice({
    name:"Chat",
    initialState:{
        message:[]
    },
    reducers:{ addmessage:(state,action)=>{
        state.message.splice(Live_Chat_Count,1);
        state.message.unshift(action.payload)
    }
  }
})

export const{addmessage} = chatSlice.actions ;
export default chatSlice.reducer ;