import React from 'react'
import { logo,avatar } from '../assets'
import {useState} from 'react';

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false);

  const handleUserMenu = event => {
    setUserMenu(current => !current);
  };

  return (
    <div className='flex flex-col ss:flex-row ss:justify-between'>
        <div className='flex mb-[30px] ss:mb-0 justify-between'>
          <img className='h-[50px] w-[200px]' src={logo}></img>
          <div className='flex items-center'>
              <div className='relative flex-col flex ss:hidden'>
                <img onClick={handleUserMenu} className='w-[50px] h-[50px] rounded-full ml-[20px] object-cover cursor-pointer' src={avatar}></img>
                <div className={`flex-col absolute top-[70px] right-0 bg-grey3 rounded-[5px] py-[20px] px-[40px] ${userMenu ? 'flex' : 'hidden'}`}>
                  <a className='p-[10px] text-white text-left' href='#'>Settings</a>
                  <a className='p-[10px] text-white text-left' href='#'>Log Out</a>
                </div>
              </div>
          </div>
        </div>
        <div className='flex items-center'>
            {/*  
              <a className='primary-button' href="#">ADD NEW TASK</a>
            */}
            <div className='relative flex-col hidden ss:flex'>
              <img onClick={handleUserMenu} className='w-[50px] h-[50px] rounded-full ml-[20px] object-cover cursor-pointer' src={avatar}></img>
              <div className={`flex-col absolute top-[70px] right-0 bg-grey3 rounded-[5px] py-[20px] px-[40px] ${userMenu ? 'flex' : 'hidden'}`}>
                <a className='p-[10px] text-white text-left' href='#'>Settings</a>
                <a className='p-[10px] text-white text-left' href='#'>Log Out</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar