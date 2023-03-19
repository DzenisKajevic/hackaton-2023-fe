import React from 'react'
import Navbar from './Navbar'
import Device from './Device'
import { door } from '../assets'
import { devicesSample } from '../constants'

const Dashboard = () => {
  return (
    <div className='px-[9.5vw] bg-primary'>
        <div className='pt-[50px]'>
            <Navbar/>
            <h3 className='text-secondary font-semibold text-[34px] leading-[51x] mt-[100px] mb-[50px]'>Your Devices</h3>
            <div className='grid grid-cols-1 xs:grid-cols-2 ss:grid-cols-3 md:grid-cols-5 mt-[50px] gap-[20px] pb-[200px]'>
                {devicesSample.map((device)=>(
                    <Device 
                        icon={device.icon}
                        title={device.title}
                    />
                ))}
                <div className='flex flex-col items-center justify-center aspect-square rounded-[10px] add-new'>
                    <p className='text-secondary font-bold text-[60px] mb-[10px]'>+</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard