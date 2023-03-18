import React from 'react'
import { avatar } from '../assets'
import { profilesSample } from '../constants'
import { crown } from '../assets'


const Profiles = () => {
  return (
    <div className='flex justify-center flex-col h-full min-h-[100vh] bg-primary items-center py-[50px] ms:py-0'>
        <p className='text-grey text-center mb-[50px]'>Select your profile</p>
        <div className='flex justify-center items-center flex-wrap gap-[30px]'>
            {profilesSample.map((profile)=>(
                <div className='flex flex-wrap items-center flex-col profile-avatar relative'>
                    <img className='w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full object-cover' src={profile.avatar}></img>
                    <p className={`mt-[20px] bg-accent absolute bottom-[-10px] text-primary font-bold rounded-[5px] text-[14px] px-[7px] py-[4px] items-center ${profile.role==="admin" ? 'flex': 'hidden'}`}><span className='font-montserrat font-semibold mt-[2px]'>Admin</span> <img className='w-[15px] ml-[5px]' src={crown}></img></p>
                </div>
            ))}
            <div className='flex bg-grey3 add-new items-center justify-center w-[100px] h-[100px] sm:w-[140px] sm:h-[140px]  rounded-full profile-avatar'>
                <p className='text-[60px] text-secondary font-bold mb-[10px]'>+</p>
            </div>
        </div>
    </div>
  )
}

export default Profiles