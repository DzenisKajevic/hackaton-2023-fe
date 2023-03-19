import React from 'react'

const AddDevice = () => {
  return (
    <div className='rounded-[20px] bg-secondary border-[1px] border-grey4 flex flex-col px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 mx-auto device-manage justify-center'>
        <div className='h-100 flex flex-col p-[40px]'>
            <div className='flex justify-between items-center mb-[40px]'>
                <h5 className='text-primary text-[20px]'>Add device</h5>
                <button className='w-[40px] h-[40px] rounded-full border-[1px] border-grey4 flex items-center justify-center'>
                    <span>X</span>
                </button>
            </div>
            <div className='flex flex-col mb-[30px] select'>
                <label className="mb-[7px]" htmlFor="">Device Name</label>
                <select className='p-[16px] rounded-[6px] border-[1px] border-grey4'>
                    <option className='p-[6px]' value="bulb">Bulb</option>
                    <option value="door">Door</option>
                    <option value="thermostat">Thermostat</option>
                </select>
            </div>
            <div className='flex flex-col mb-[30px]'>
                <label className="mb-[7px]" htmlFor="">Device Name</label>
                <input className='p-[16px]' type="text" id="deviceName" name="deviceName" placeholder="Living room lights" />
            </div>
            <div className='flex flex-col mb-[30px]'>
                <label className="mb-[7px]" htmlFor="">IP Address</label>
                <input className='p-[16px]' type="text" id="ipAddress" name="ipAddress" placeholder="192.167.1.1" />
            </div>
            <div className='flex flex-col mb-[40px]'>
                <label className="mb-[7px]" htmlFor="">MAC Address</label>
                <input className='p-[16px]' type="text" id="macAddress" name="macAddress" placeholder="225.883.555.333" />
            </div>
            <button type="submit" className='bg-accent p-[16px] rounded-[6px] flex-1'>Finish</button>
        </div>
    </div>
  )
}

export default AddDevice