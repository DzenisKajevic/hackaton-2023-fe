import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();

  const goBack = () => {
      navigate("/profiles");
  }
  return (
    <div className='flex flex-col register-form h-[100vh] my-auto flex-auto items-center justify-center bg-primary'>
        <div onClick={goBack} className='flex absolute top-[50px] right-[108px] go-back-button items-center cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_50" data-name="Group 50" transform="translate(-993 -178)">
              <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(993 178)" fill="none" stroke="#cdcdcd" stroke-width="1">
                <circle cx="20" cy="20" r="20" stroke="none"/>
                <circle cx="20" cy="20" r="19.5" fill="none"/>
              </g>
              <path id="interface-arrows-button-up" d="M7.749,597.986a1.105,1.105,0,0,0-.249.067.966.966,0,0,0-.208.112c-.06.04-.245.224-3.426,3.4-1.849,1.849-3.376,3.379-3.393,3.4a.6.6,0,0,0-.088.183.807.807,0,0,0,0,.264.568.568,0,0,0,.3.358.464.464,0,0,0,.218.044.469.469,0,0,0,.212-.037c.1-.041-.086.142,3.454-3.4l3.323-3.322,3.323,3.322c2.636,2.635,3.332,3.328,3.366,3.35a.474.474,0,0,0,.3.084.457.457,0,0,0,.221-.044.545.545,0,0,0,.3-.377.3.3,0,0,1,.013-.052.352.352,0,0,0,0-.128s-.006,0-.006-.013a.511.511,0,0,0-.105-.248c-.014-.018-1.538-1.545-3.386-3.392-3.178-3.177-3.363-3.361-3.423-3.4a.966.966,0,0,0-.208-.112,1.081,1.081,0,0,0-.539-.067m-7.375,7.3c0,.036,0,.051,0,.031a.606.606,0,0,0,0-.066c0-.017,0,0,0,.035" transform="translate(409.102 205.898) rotate(-90)" fill="#d3e6fb" fill-rule="evenodd"/>
            </g>
          </svg>
          <p className='text-white ml-[15px]'>Go back</p>
        </div>
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