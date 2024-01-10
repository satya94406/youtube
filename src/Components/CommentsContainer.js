import React from 'react'

const commentData =[
    {
        name:"satya",
        text:" I am good developer",
        replies:[],
    },
    {
        name:"satya",
        text:"i am good developer",
        replies:[
            {
                name:"satya",
                text:"i am good developer",
                replies:[
                    {
                        name:"satya",
                        text:"i am good developer",
                        replies:[
                            {
                                name:"satya",
                                text:"i am good developer",
                                replies:[],
                            },
                        ],
                    }
                ],
            }, 
        ],
    },
    {
        name:"satya",
        text:"i am good developer",
        replies:[],
    },
    {
        name:"satya",
        text:"i am good developer",
        replies:[],
    },
]

const CommentList=({comments})=>{
    // don't use index as a key in map 
    //recursion
    return comments.map((comment,index)=> 
    <div>
        <Comments key={index} data={comment}/>
      <div className='ml-8 w-[700px]' >
        <CommentList key={index} comments={comment.replies}/> 
      </div>
    </div>
    )
}

const Comments=({data})=>{
    const{name,text,replies} = data
    return(
        <div className='flex p-1 shadow-sm bg-slate-200 rounded-lg w-[64%] m-1'>
            <img alt='user' className='h-7 w-7' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
            <div className='px-2'>
              <h1 className='font-semibold'>{name}</h1>
              <h1>{text}</h1>
            </div>
        </div>
    )
}

const CommentsContainer = () => {
  return (
    <div className='ml-2'>
       <h1 className='text-lg font-semibold'>Comments:</h1>
       <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer