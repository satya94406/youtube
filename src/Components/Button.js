import React from 'react'

const Button = ({name}) => {
    console.log(name)
  return (
    <div className='flex'>
      <button >{name}</button>
    </div>
  )
}

export default Button;