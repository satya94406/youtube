import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { CloseMenu } from './Utils/Sidebar_Slice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"))
  
  const dispatch= useDispatch();
  useEffect(()=>{
     dispatch(CloseMenu());
  },[])

return (
  <div className='flex flex-col  '>
   <div className=''>
    <div className=' ml-2 flex '>
       <iframe 
         width="700"
         height="300"
         src={"https://www.youtube.com/embed/"+searchParams.get("v")}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
       </iframe>
       <div className='ml-2 w-48'>
         <LiveChat/>
       </div>
      </div>
    </div>
    <CommentsContainer/>
  </div> 
  )
}

export default WatchPage