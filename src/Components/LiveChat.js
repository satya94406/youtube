import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from './Utils/chatSlice';
import { generateRandomMessages, generateRandomName } from './Utils/Helper';


const LiveChat = () => {
  
  const[LiveMessage , setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store)=>store.chat.message)

  useEffect(()=>{
   const e = setInterval(()=>{
      //API Polling
      //console.log("API Polling");
      dispatch(addmessage({
         name: generateRandomName() ,
         message:generateRandomMessages(15),
      }))
    },1500);

    return()=> clearInterval(e);
  },[]);

  return (
    <div>
    <div className='shadow-lg m-1 font-bold bg-white '>Top messages</div>
    <div className='border-2 h-[244px] rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse '>
       {chatMessages.map((e,index)=>
        <ChatMessage key={index} name={e.name} message={e.message}/>
       )}
    </div>
     <form className=' flex h-8' 
       onSubmit={(e)=>{e.preventDefault()
         dispatch(
          addmessage({
            name:"SP",
            message:LiveMessage ,
          })
         )
         setLiveMessage(" ")
       }}
       >

       <input 
         className=' cursor-pointer bg-slate-100 w-40 m-1 p-1 px-2 rounded-md ' 
         placeholder='Typing...' 
         value={LiveMessage} 
         onChange={(e)=>{setLiveMessage(e.target.value)}}/>
       <button className='cursor-pointer items-center mt-1 rounded-2xl'>▶️</button>
     </form>
    </div>
  )
}

export default LiveChat