import React from 'react'

const Device = (props) => {
  return (
    <div className='flex flex-col items-center justify-center aspect-square rounded-[10px] border-[1px] border-[#40474E] device-box'>
        <div className='w-[40px] h-[40px] rounded-full bg-[#757575] flex items-center justify-center circle'>
            <img src={props.icon}></img>
        </div>
        <p className='text-secondary mt-[20px] font-medium'>{props.title}</p>
    </div>
  )
}

export default Device