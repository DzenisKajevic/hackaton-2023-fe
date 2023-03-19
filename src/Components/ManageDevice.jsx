import React from 'react'
import { devicesSample } from '../constants'
import { usersSample } from '../constants'
import {useState} from 'react';

const ManageDevice = (props) => {
  const [buttonText, setButtonText] = useState('Click');


  const [isShown, setIsShown] = useState(false);

  const handleUsers = event => {
    setIsShown(current => !current);
  };

  return (
    <div className='rounded-[20px] bg-secondary border-[1px] border-grey4 flex flex-col px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 mx-auto device-manage justify-center'>
        <div className='h-100 flex flex-col p-[40px]'>
            <div className='flex justify-between items-center mb-[40px]'>
                <div className='flex items-center'>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#757575] flex items-center justify-center circle'>
                        <img src={props.icon}></img>
                    </div>
                    <p className='ml-[15px] text-[12px] px-[6px] border-[1px] border-grey3 py-[3px] rounded-[5px]'>Details</p>
                </div>
                <button className='w-[40px] h-[40px] rounded-full border-[1px] border-grey4 flex items-center justify-center'>
                    <span>X</span>
                </button>
            </div>
            <p className='text-primary text-[20px] font-montserrat mb-[30px] font-medium'>Dnevna soba</p>

            <div className='flex items-center justify-center mb-[40px]'>
              <div className='bg-grey4 w-[50px] h-[50px] rounded-[5px] items-center justify-center text-center flex'>
                <p className='text-[40px] font-bold text-primary'>-</p>
              </div>
              <div>
                <div className='bg-grey4 rounded-full w-[150px] h-[150px] flex items-center justify-center mb-[20px]'>
                  <h1 className='text-primary text-[60px] font-extrabold font-montserrat '>25</h1>
                </div>
                <p className='text-primary text-[20px] font-semibold'>Celsius</p>
              </div>
              <div className='bg-grey4 w-[50px] h-[50px] rounded-[5px] items-center justify-center flex'>
                <p className='text-[40px] font-bold text-primary'>+</p>
              </div>
            </div>

            {isShown && <Userslist />}
            <button onClick={handleUsers} type="submit" className='border-[1px] border-grey4 p-[16px] rounded-[6px] flex-1 mb-[20px]'>
              { isShown ? "Hide" : "Add Permission"}
            </button>
            {isShown && (
              <button type="submit" className='bg-accent text-primary p-[16px] rounded-[6px] flex-1'>Submit</button>
            )}
            
        </div>
    </div>
  )
}


function Userslist() {
  
  return (
    <div className='flex flex-col mb-[40px]'>
        {usersSample.map((user)=>(
            <div className='flex items-center my-[5px]'>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className='ml-[10px]' for="vehicle2"> I have a car</label>
            </div>
        ))}
    </div>
  );
}





export default ManageDevice