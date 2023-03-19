import React from 'react'
import { devicesSample } from '../constants'
import { usersSample } from '../constants'
import {useState} from 'react';

const ManageDevice = (props) => {
  const [temperature, setTemperature] = useState(0);

  const [buttonText, setButtonText] = useState('Click');
  const [isShown, setIsShown] = useState(false);
  const [locked, unlock] = useState(false);

  const handleUsers = event => {
    setIsShown(current => !current);
  };

  const handleLocker = event => {
    unlock(current => !current);
  };

  const temperatureIncrease = () => {
    setTemperature(temperature + 1);
  };

  const temperatureDecrease = () => {
    setTemperature(temperature - 1);
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

             {/*  TEMPERATURE
            <div className='flex items-center justify-center mb-[40px]'>
              <div onClick={temperatureDecrease} className='cursor-pointer bg-grey4 w-[50px] h-[50px] rounded-[5px] items-center justify-center text-center flex'>
                <p className='text-[40px] font-bold text-secondary select-none'>-</p>
              </div>
              <div>
                <div className={`relative rounded-full w-[170px] h-[170px] flex items-center justify-center mb-[20px] mx-[30px] ${temperature>30 ? 'hot': 'cold'}`}>
                  <div className='w-[15px] h-[15px] rounded-full bg-secondary absolute top-[35px] right-[35px]'></div>
                  <h1 className={`text-secondary text-[60px] font-extrabold font-montserrat`}>{temperature}</h1>
                </div>
              </div>
              <div onClick={temperatureIncrease} className='bg-grey4 cursor-pointer w-[50px] h-[50px] rounded-[5px] items-center justify-center flex'>
                <span className='text-[40px] font-bold text-secondary select-none'>+</span>
              </div>
            </div>
             */}


            <div onClick={handleLocker} className='mb-[40px] cursor-pointer select-none'>
              { locked ? <Locked/> : <Unlocked/>}
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

function Locked() {
  return (
    <div className='flex bg-[#FF3131] rounded-[10px] items-center justify-center py-[40px] mb-[30px]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="43.761" height="55.706" viewBox="0 0 43.761 55.706">
        <path id="lock" d="M289.548.334c-.682.044-.92.064-1.3.112a15.745,15.745,0,0,0-5.186,1.582,16.1,16.1,0,0,0-6.23,5.626,15.886,15.886,0,0,0-2.391,6.631,23.931,23.931,0,0,0-.111,3.421l-.013,2.508-.287.015a5.871,5.871,0,0,0-2.321.6,6.024,6.024,0,0,0-2.754,2.753,6.152,6.152,0,0,0-.561,1.85c-.043.3-.043,25.114,0,25.41A6,6,0,0,0,273.505,56c.235.036,1.255.038,16.734.038s16.5,0,16.734-.038a6.007,6.007,0,0,0,5.114-5.155c.043-.3.043-25.114,0-25.41A6.007,6.007,0,0,0,306.3,20.22l-.134-.005-.013-2.508a23.928,23.928,0,0,0-.111-3.421,15.911,15.911,0,0,0-2.781-7.211,16.13,16.13,0,0,0-5.84-5.047A15.814,15.814,0,0,0,291.566.375c-.353-.03-1.742-.058-2.017-.041m-.279,4.011A11.935,11.935,0,0,0,284.834,5.6a12.125,12.125,0,0,0-4.151,3.494,11.967,11.967,0,0,0-2.2,5.082,17.94,17.94,0,0,0-.179,3.789v2.251h23.872V17.964a23.163,23.163,0,0,0-.089-3.187,11.815,11.815,0,0,0-1.167-3.857,11.068,11.068,0,0,0-1.124-1.829A12.547,12.547,0,0,0,297.673,6.9a11.943,11.943,0,0,0-5.851-2.493,13.584,13.584,0,0,0-2.552-.065M273.99,24.231a2.2,2.2,0,0,0-.8.321,2.884,2.884,0,0,0-.517.516,2.279,2.279,0,0,0-.275.589l-.05.174v12.3c0,11.842,0,12.309.041,12.449a2.059,2.059,0,0,0,1.24,1.355c.342.125-.873.116,16.607.116s16.265.008,16.607-.116a2.067,2.067,0,0,0,1.24-1.355c.039-.139.04-.644.04-12.449v-12.3l-.05-.174a1.9,1.9,0,0,0-.516-.864,1.945,1.945,0,0,0-.852-.516l-.163-.051-16.249,0c-8.937,0-16.274,0-16.3.007M289.638,34.2a3.483,3.483,0,0,0-.7.171,3.982,3.982,0,0,0,.323,7.619,4.388,4.388,0,0,0,1.961,0,3.979,3.979,0,0,0-.441-7.8,4.562,4.562,0,0,0-1.142.009" transform="translate(-268.359 -0.329)" fill="#fff" fill-rule="evenodd"/>
      </svg>
      <p className='ml-[20px] text-[20px] font-medium text-secondary'>Locked</p>
    </div>
  )
}

function Unlocked() {
  return (
    <div className='flex bg-[#89FF67] rounded-[10px] items-center justify-center py-[40px] mb-[30px]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="43.764" height="55.71" viewBox="0 0 43.764 55.71">
        <path id="interface-unlock" d="M289.528.334c-.7.046-.9.063-1.282.111a15.882,15.882,0,0,0-7.874,3.3,16.243,16.243,0,0,0-3.543,3.908,15.887,15.887,0,0,0-2.391,6.632,23.924,23.924,0,0,0-.111,3.422l-.013,2.508-.287.015a5.871,5.871,0,0,0-2.321.6,6.024,6.024,0,0,0-2.754,2.754,6.154,6.154,0,0,0-.561,1.85c-.043.3-.043,25.116,0,25.412A6,6,0,0,0,273.506,56c.235.036,1.255.038,16.735.038s16.5,0,16.735-.038a6.007,6.007,0,0,0,5.115-5.156c.043-.3.043-25.116,0-25.412a5.928,5.928,0,0,0-1.709-3.456,5.8,5.8,0,0,0-2.018-1.333,6.144,6.144,0,0,0-1.337-.365c-.2-.035-1.2-.039-14.467-.05L278.3,20.216V17.965a17.942,17.942,0,0,1,.18-3.79,12.062,12.062,0,0,1,1.781-4.49,12.215,12.215,0,0,1,3.589-3.527,12.008,12.008,0,0,1,4.793-1.746,13.105,13.105,0,0,1,3.21,0,11.733,11.733,0,0,1,4.848,1.809,10.964,10.964,0,0,1,1.672,1.332,3.274,3.274,0,0,0,.836.661,2.059,2.059,0,0,0,1.768-.023,2.034,2.034,0,0,0,1.043-1.363A2.956,2.956,0,0,0,302,5.883a2.334,2.334,0,0,0-.369-.707A14.646,14.646,0,0,0,300.027,3.7,15.691,15.691,0,0,0,291.612.375c-.353-.03-1.809-.059-2.084-.04m-15.537,23.9a2.2,2.2,0,0,0-.8.321,2.885,2.885,0,0,0-.517.516,2.278,2.278,0,0,0-.275.589l-.05.174v12.3c0,11.843,0,12.31.041,12.45a2.059,2.059,0,0,0,1.24,1.355c.342.125-.873.116,16.608.116s16.266.008,16.608-.116a2.067,2.067,0,0,0,1.24-1.355c.039-.139.04-.644.04-12.45v-12.3l-.05-.174a1.9,1.9,0,0,0-.517-.864,1.945,1.945,0,0,0-.852-.516l-.163-.051-16.25,0c-8.938,0-16.275,0-16.306.007m15.649,9.97a3.484,3.484,0,0,0-.7.171,3.983,3.983,0,0,0,.323,7.62,4.388,4.388,0,0,0,1.962,0,3.979,3.979,0,0,0-.441-7.8,4.562,4.562,0,0,0-1.142.009" transform="translate(-268.359 -0.329)" fill="#fff" fill-rule="evenodd"/>
      </svg>
      <p className='ml-[20px] text-[20px] font-medium text-secondary'>Unlocked</p>
    </div>
  )
}





export default ManageDevice