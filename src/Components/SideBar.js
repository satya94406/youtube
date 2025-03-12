import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const SideBar = () => {
   
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  return !isMenuOpen ? null: (
    <div className='col-span-1 shadow-md w-32 mt-3 ml-2'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li>link</li>
            <li>History</li>
            <li>New Video</li>
        </ul>

        <h1 className='font-bold  mt-2'>Explore</h1>
        <ul>
            <li>Music</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>Movies</li>
            <li>Learning</li>
        </ul>
        <h1 className='font-bold mt-2'>Supscription</h1>
        <ul>
            <li>Music</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>Movies</li>
            <li>Learning</li>
        </ul>
    </div>
  )
}

export default SideBar