import React from 'react';

const Register = () => {
    return (
        <div className='flex flex-col register-form ss:h-[100vh] my-auto flex-auto items-center justify-center bg-primary'>
            <div className='px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 flex flex-col ss:my-0 my-[100px]'>
                <h2 className='text-[34px] font-bold color-secondary text-center mb-[20px] leading-[30px] text-secondary'>Get Started</h2>
                <p className='text-[16px] text-text text-center mb-[50px]'>Creating an account is easy! Simply fill out the form below to get started.</p>
                <div className='flex flex-col ss:flex-row mb-[20px]'>
                    <div className='flex flex-col flex-1 mb-[20px] ss:mb-0 ss:mr-[10px]'>
                        <label className="" htmlFor="">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="John"/>
                    </div>
                    <div className='flex flex-col flex-1 ss:ml-[10px]'>
                        <label className="" htmlFor="">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Doe" />
                    </div>
                </div>
                <div className='flex flex-col mb-[20px]'>
                    <label className="" htmlFor="">Email</label>
                    <input type="text" id="email" name="email" placeholder="hello@example.com"/>
                </div>
                <div className='flex flex-col mb-[40px]'>
                    <label className="" htmlFor="">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type='submit' className='text-[14px] text-secondary text-center mb-[20px]'>Register</button>
                <p className='text-text text-center'>Already have an account? <span className='text-secondary'>Login</span></p>
            </div>
        </div>
    );
}

export default Register;