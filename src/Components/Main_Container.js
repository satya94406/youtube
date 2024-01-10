import React from 'react'
import Button_List from './Button_List'
import Video_Container from './Video_Container'

const Main_Container = () => {
  return (
    <div className='col-span-11'>
       <Button_List/>
       <Video_Container/>
    </div>
  )
}

export default Main_Container