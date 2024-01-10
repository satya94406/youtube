import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from './Utils/Sidebar_Slice';
import { YOUTUBE_SEARCH_API} from './Utils/Constant';
import { cacheResult } from './Utils/searchSlice';


const Header = () => {

    const[SearchQuery , setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestion , setShowSuggestion] = useState(false);
    const dispatch =useDispatch();
    const searchCache = useSelector((store)=>store.searchSlice) ;
     {/* 
         searchCache = {
           "iphone 11" , "iphone pro" , "iphone ultra pro 13 max" 
         }

         searchQuery = iphone 
     */}

    //console.log(SearchQuery);

    useEffect(()=>{
      //console.log(SearchQuery);
      //make an api call after every seach
      //but if the differncence  between 2 API's stroke call is  less than 200ms .
      // decline the API call 
      //getSearchSuggestion();
      const timer = setTimeout(()=>
      // getSearchSuggestion()
      {
       if(searchCache[SearchQuery]){
              setSuggestions(searchCache[SearchQuery])
       }
       else{
        getSearchSuggestion();
       }
      }
      ,200);
      return()=>{
        clearTimeout(timer);
      }
    },[SearchQuery])

    {/*
       key -i
         - render the component
         - useEffect(
         - start timer => make api call after 200 ms
        
       key -ip
         - destroy the component( useEffect return method )
         - re-render the component
         - useEffect()
         - start timer => make api call after 200 ms
       
       setTimeout(200)=> make api call ...  
    */}

    const getSearchSuggestion =async()=>{
      console.log(SearchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery) ;
      const json = await data.json();
      console.log(json[1]);
      setSuggestions(json[1]);

      //update cache 
      dispatch(cacheResult({
        [SearchQuery]:json[1]
      }))
    }

    const toggleMenuBarClick=()=>{
      dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col shadow-md m-2 '>
       <div className='flex col-span-1'>
          <img className='h-8 mt-4 cursor-pointer' alt='menu' onClick={()=>toggleMenuBarClick()} src='https://cdn-icons-png.flaticon.com/128/141/141932.png'/>
          <a href='./'>
            <img className='h-12 m-1 mt-2' alt='YT Logo' src='data:image/png;base64,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'/>
          </a>   
       </div>
      <div className='  col-span-10 m-3'>
       
         <div>
          <input 
            className=' w-2/3 py-1  px-3 border-2 focus:border-blue-100  rounded-l-2xl' 
            placeholder='search' 
            type='text'
            value={SearchQuery}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button className='px-2 p-1 font-bold border-2 bg-slate-200 rounded-r-2xl '>🔍</button>
         </div>

         <div className='fixed bg-white w-[32rem] px-4 m-1 shadow-lg rounded-lg border border-gray-50'>
            <ul>
           {showSuggestion &&   suggestions.map((e)=><li key={e} className='py-1 hover:bg-gray-200'>🔍{e}</li>)}
            </ul>
         </div>
       
       </div>

       <div className='flex justify-end'>
          <img className='col-span-1 h-12 ' alt='User Logo' src='data:image/jpeg;base64,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' />
       </div>
    </div>

  )
}

export default Header;