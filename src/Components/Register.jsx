import React from 'react';
import '../api/userAuth';
import { register } from '../api/userAuth';

function redirectIfLoggedIn() {
    if (window.localStorage.token) {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        // not logged in so redirect to login page with the return url
        window.location.replace('/');
    }
}

async function registerSubmit() {
    //e.preventDefault();
    const first_name = document.getElementById("firstname").value;
    const last_name = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(first_name, last_name, email, password);
    const response = await register(first_name, last_name, email, password);
    if (response.error) {
        console.log(response.error); // response.error.response.data -> error message
    }
    else {
        // saves the token into the localStorage. 
        window.localStorage.token = response.data.data.token;
        window.localStorage.user = JSON.stringify(response.data.data.registeredUser);
        // .data is needed twice because of initial data / error separation
        console.log(response);
        window.location.replace('/');
    }
    return response;
}

const Register = () => {
    redirectIfLoggedIn();
    return (
        <div className='flex flex-col register-form ss:h-[100vh] my-auto flex-auto items-center justify-center bg-primary'>
            <div className='px-[40px] xs:px-0 ss:w-5/6 md:w-1/2 flex flex-col ss:my-0 my-[100px]'>
                <h2 className='text-[34px] font-bold color-secondary text-center mb-[20px] leading-[30px] text-secondary'>Get Started</h2>
                <p className='text-[16px] text-text text-center mb-[50px]'>Creating an account is easy! Simply fill out the form below to get started.</p>
                <div className='flex flex-col ss:flex-row mb-[20px]'>
                    <div className='flex flex-col flex-1 mb-[20px] ss:mb-0 ss:mr-[10px]'>
                        <label className="" htmlFor="">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="John" />
                    </div>
                    <div className='flex flex-col flex-1 ss:ml-[10px]'>
                        <label className="" htmlFor="">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Doe" />
                    </div>
                </div>
                <div className='flex flex-col mb-[20px]'>
                    <label className="" htmlFor="">Email</label>
                    <input type="text" id="email" name="email" placeholder="hello@example.com" />
                </div>
                <div className='flex flex-col mb-[40px]'>
                    <label className="" htmlFor="">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type='submit' onClick={ registerSubmit } className='text-[14px] text-secondary text-center mb-[20px]'>Register</button>
                <p className='text-text text-center'>Already have an account? <span className='text-secondary'>Login</span></p>
            </div>
        </div>
    );
}

export default Register;