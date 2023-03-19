import React from 'react'
import {logo,avatar, clients, devices } from '../assets'
import Footer from './Footer'


const Welcome = () => {
  return (
    <div className='bg-primary'>
        <div className=''>
            <div className='header-welcome'>
                <div className='px-[9.5vw]'>
                    <div className='flex justify-between pt-[50px] justify-self-start'>
                        <img src={logo}></img>
                        <div className='flex items-center'>
                            <a className='tertiary-button' href="#">Login</a>
                        </div>
                    </div>
                    <div className='h-[calc(100vh-108px)] flex items-center'>
                        <div className='flex flex-col w-full sm:w-3/4 justify-self-center'>
                            <p className='text-[12x] tracking-[2px] text-grey4 mb-[30px]'>Smart Home Made Easy</p>
                            <h1 className='text-white text-[36px] xs:text-[48px] md:text-[60px] font-semibold mb-[30px]'>Take care of your smart home</h1>
                            <a className='primary-button w-fit' href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-[9.5vw] py-[90px] smd:py-[150px] flex flex-col smd:flex-row'>
                <div className='w-full smd:w-1/2 mb-[60px] smd:mb-0 smd:mr-[50px]'>
                    <p className='text-[12px] tracking-[2px] text-grey4 mb-[30px] text-center smd:text-left'>Smart Home Made Easy</p>
                    <h2 className='text-white text-[24px] xs:text-[28px] md:text-[34px] font-semibold mb-[30px] text-center smd:text-left'>Simplify Your Life with Easy Device Management</h2>
                    <p className='text-grey2 text-center smd:text-left'>Our website offers remote management of your smart home devices, allowing you to control them from anywhere using your phone or laptop. Stay connected and in control no matter where you are, and enjoy the peace of mind that comes with knowing your home is always within reach.</p>
                </div>
                <div className='w-full smd:w-1/2 flex flex-1'>
                    <img className='rounded-[20px] object-contain w-auto h-auto smd:justify-around' src={clients}/>
                </div>
            </div>
            <div className='px-[9.5vw] py-[90px] smd:py-[150px] flex flex-col-reverse smd:flex-row'>
                <div className='w-full smd:w-1/2 flex flex-1'>
                    <img className='rounded-[20px] aspect-auto object-contain w-auto h-auto smd:pr-[50px] smd:justify-around' src={devices}/>
                </div>
                <div className='w-full smd:w-1/2 mb-[60px] smd:mb-0 smd:ml-[30px]'>
                    <p className='text-[12px] tracking-[2px] text-grey4 mb-[30px] text-center smd:text-right'>Smart Home Made Easy</p>
                    <h2 className='text-white text-[24px] xs:text-[28px] md:text-[34px] font-semibold mb-[30px] text-center smd:text-right'>Simplify Smart Home Access for Your Family </h2>
                    <p className='text-grey2 text-center smd:text-right'>Our website simplifies the process of adding sub accounts to your smart home. With just a few clicks, you can create multiple accounts for family members, guests, or staff, and customize their access levels. Our user-friendly interface puts you in control, ensuring that your smart home remains secure and accessible to those you trust.</p>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Welcome