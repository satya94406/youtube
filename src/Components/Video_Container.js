import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './Utils/Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const Video_Container = () => {

  const [videos , setVideos] = useState([]);

  useEffect(()=>{
    getVideos()
  },[]);

  const getVideos= async()=>{
     const data = await fetch(YOUTUBE_VIDEO_API);
     const json = await data.json();
    console.log(json);
     setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      { videos.map((video)=> 
    <Link key={video.id} to={"/watch?v="+video.id}> 
       <VideoCard data={video} /> 
    </Link> 
      ) }
    </div>
  )
}

export default Video_Container;