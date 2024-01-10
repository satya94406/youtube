import React from 'react'

const VideoCard = ({data}) => {

    //console.log(data);

    const {snippet , statistics} = data ;
    const { thumbnails,title,discription,channelTitle }=snippet ;

  return (
    <div >
      <div className='p-1 m-1 h-56 shadow-lg w-52'>
       <img className='h-28 w-52  rounded-lg ' alt='thumbnail pic' src={thumbnails.default.url} />
       <ul >
          <li className='font-bold text-xs  '>{title}</li>
          <li className='text-xs'>{channelTitle}</li>
          <li className='text-xs'>{statistics.viewCount}views</li>
       </ul>
       </div>
    </div>
  )
}

export default VideoCard