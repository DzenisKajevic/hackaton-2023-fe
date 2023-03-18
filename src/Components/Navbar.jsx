import React from 'react'
import { logo,avatar } from '../assets'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <img src={logo}></img>
        <div className='flex items-center'>
            <a className='primary-button ' href="#">ADD NEW TASK</a>
            <img className='w-[50px] h-[50px] rounded-full ml-[20px] object-cover' src={avatar}></img>
        </div>
    </div>
  )
}

export default Navbar