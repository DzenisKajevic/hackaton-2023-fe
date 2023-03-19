import React from 'react'

const CreateProfile = () => {
  return (
    <div className='flex flex-col register-form h-[100vh] my-auto flex-auto items-center justify-center bg-primary'>
        <div className='px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 flex flex-col'>
            <h2 className='text-[34px] font-bold text-secondary text-center mb-[20px] leading-[30px]'>Create new profile</h2>
            <p className='text-[16px] text-text text-center mb-[50px]'>Please enter details for your new sub profile.</p>
            <div className='flex flex-col mb-[20px]'>
                <label className="" htmlFor="">Username</label>
                <input type="text" id="username" name="username" placeholder="Profile Username" />
            </div>
            <div className='flex flex-col mb-[40px]'>
                <label className="" htmlFor="">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type='submit' className='text-[14px] text-secondary text-center mb-[20px]'>Create profile</button>
            
        </div>
    </div>
  )
}

export default CreateProfile