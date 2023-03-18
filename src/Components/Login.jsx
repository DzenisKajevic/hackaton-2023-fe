import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col register-form h-[100vh] my-auto flex-auto items-center justify-center bg-primary'>
            <div className='px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 flex flex-col'>
                <h2 className='text-[34px] font-bold text-secondary text-center mb-[20px] leading-[30px]'>Welcome Back</h2>
                <p className='text-[16px] text-text text-center mb-[50px]'>Please enter your login details to access your account.</p>
                <div className='flex flex-col mb-[20px]'>
                    <label className="" htmlFor="">Email</label>
                    <input type="text" id="email" name="email" placeholder="hello@example.com" />
                </div>
                <div className='flex flex-col mb-[40px]'>
                    <label className="" htmlFor="">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type='submit' className='text-[14px] text-secondary text-center mb-[20px]'>Login</button>
                <p className='text-text text-center'>Don't have an account? <span className='text-secondary'>Register</span></p>
            </div>
        </div>
    );
}

export default Login;