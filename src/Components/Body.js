import React from 'react'
import SideBar from './SideBar';
import Main_Container from './Main_Container';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body;