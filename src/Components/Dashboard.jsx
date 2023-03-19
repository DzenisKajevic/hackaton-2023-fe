import React from 'react'
import Navbar from './Navbar'
import Device from './Device'
import { door } from '../assets'
import { devicesSample } from '../constants'
import Footer from './Footer'
import AddDevice from './AddDevice'
import {useState} from 'react'

const Dashboard = () => {
  const [isForm, showForm] = useState(false);

  const handleForm = event => {
    showForm(current => !current);
  };

  return (
    <div className='min-h-[100vh] h-full relative'>
        {isForm && <AddDevice/>}
        <div className='px-[9.5vw] min-h-[100vh] bg-primary'>
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
                    <div onClick={handleForm} className='flex flex-col items-center justify-center aspect-square rounded-[10px] add-new'>
                        <p className='text-secondary font-bold text-[60px] mb-[10px]'>+</p>
                        <p className='text-secondary mt-[20px]'>Add new device</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}



export default Dashboard