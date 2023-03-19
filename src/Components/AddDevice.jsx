import React, { useEffect, useState } from 'react'
import { addDevice } from '../api/deviceCalls';

const AddDevice = () => {
    const [deviceType, setDeviceType] = useState("Bulb");


    useEffect(() => {
        console.log("Changed to: " + deviceType);
    }, [deviceType]);

    async function addDeviceSubmit() {
        const ipAddress = document.getElementById("ipAddress").value;
        const macAddress = document.getElementById("macAddress").value;
        const deviceName = document.getElementById("deviceName").value;
        console.log(ipAddress, macAddress, deviceType, deviceName);
        const response = await addDevice(deviceName, deviceType, ipAddress, macAddress);
        if (response.error) {
            console.log(response.error); // response.error.response.data -> error message
        }
        else {
            // saves the token into the localStorage. 
            const response = response.data.data;
            // .data is needed twice because of initial data / error 
            console.log(response);
        }
        return response;
    }

    const onDeviceTypeChange = (e) => {
        console.log({ value: e.target.value });
        setDeviceType(e.target.value);
        document.getElementById('ipAddress').value = generateIP();
        document.getElementById('macAddress').value = generateMAC();
    }

    const generateIP = () => {
        return "77.221.3." + Math.floor(Math.random() * 256);
    };

    function generateMAC() {
        var hexDigits = "0123456789ABCDEF";
        var macAddress = "";
        for (var i = 0; i < 6; i++) {
            macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
            macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
            if (i != 5) macAddress += ":";
        }

        return macAddress;
    }

    return (
        <div className='rounded-[20px] modal absolute bg-secondary border-[1px] border-grey4 flex flex-col px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 mx-auto device-manage justify-center'>
            <div className='h-100 flex flex-col p-[40px]'>
                <div className='flex justify-between items-center mb-[40px]'>
                    <h5 className='text-primary text-[20px]'>Add device</h5>
                    <button className='w-[40px] h-[40px] rounded-full border-[1px] border-grey4 flex items-center justify-center'>
                        <span>X</span>
                    </button>
                </div>
                <div className='flex flex-col mb-[30px] select'>
                    <label className="mb-[7px]" htmlFor="">Device Type</label>
                    <select onChange={ onDeviceTypeChange } className='p-[16px] rounded-[6px] border-[1px] border-grey4'>
                        <option className='p-[6px]' value="light">Light</option>
                        <option value="lock">Lock</option>
                        <option value="thermostat">Thermostat</option>
                    </select>
                </div>
                <div className='flex flex-col mb-[30px]'>
                    <label className="mb-[7px]" htmlFor="">Device Name</label>
                    <input className='p-[16px]' type="text" id="deviceName" name="deviceName" placeholder="Living room lights" />
                </div>

                <div className={`${deviceType==="thermostat" ? 'flex flex-col' : 'hidden'} grid grid-cols-2 gap-[20px]`}>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Model</label>
                        <input className='p-[16px]' type="text" id="modelthermostat" name="modelthermostat" placeholder="Thermostat model" />
                    </div>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Manufacturer</label>
                        <input className='p-[16px]' type="text" id="manufacturerthermostat" name="manufacturerthermostat" />
                    </div>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Firmvare Version</label>
                        <input className='p-[16px]' type="text" id="firmvareversionthermostat" name="firmvareversionthermostet" />
                    </div>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Hvac</label>
                        <input className='p-[16px]' type="text" id="hvacthermostat" name="hvacthermostat" />
                    </div>
                </div>

                <div className={`${deviceType==="light" ? 'flex flex-col' : 'hidden'}`}>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Model</label>
                        <input className='p-[16px]' type="text" id="modeltherlight" name="modellight" placeholder="Thermostat model" />
                    </div>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className='flex flex-col mb-[30px]'>
                            <label className="mb-[7px]" htmlFor="">Manufacturer</label>
                            <input className='p-[16px]' type="text" id="manufacturerlight" name="manufacturerlight" />
                        </div>
                        <div className='flex flex-col mb-[30px]'>
                            <label className="mb-[7px]" htmlFor="">Color</label>
                            <input className='p-[16px]' type="text" id="colorlight" name="colorlight" />
                        </div>
                    </div>
                </div>

                <div className={`${deviceType==="lock" ? 'flex flex-col' : 'hidden'}`}>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">Model</label>
                        <input className='p-[16px]' type="text" id="modellock" name="modellock" placeholder="Lock model" />
                    </div>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className='flex flex-col mb-[30px]'>
                            <label className="mb-[7px]" htmlFor="">Manufacturer</label>
                            <input className='p-[16px]' type="text" id="manufacturerlock" name="manufacturerlock" />
                        </div>
                        <div className='flex flex-col mb-[30px]'>
                            <label className="mb-[7px]" htmlFor="">Firmvare Version</label>
                            <input className='p-[16px]' type="text" id="firmvareversionlock" name="firmvareversionlock" />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-[20px]'>
                    <div className='flex flex-col mb-[30px]'>
                        <label className="mb-[7px]" htmlFor="">IP Address</label>
                        <input className='p-[16px]' type="text" id="ipAddress" name="ipAddress" defaultValue={ generateIP() } /* placeholder="192.167.1.1" */ />
                    </div>
                    <div className='flex flex-col mb-[40px]'>
                        <label className="mb-[7px]" htmlFor="">MAC Address</label>
                        <input className='p-[16px]' type="text" id="macAddress" name="macAddress" defaultValue={ generateMAC() } placeholder="XX:XX:XX:XX:XX:XX" />
                    </div>
                </div>
                <button type="submit" onClick={ addDeviceSubmit } className='bg-accent p-[16px] rounded-[6px] flex-1'>Finish</button>
            </div>
        </div>
    )
}


export default AddDevice