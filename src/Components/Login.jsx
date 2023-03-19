import React from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../api/userAuth';

function redirectIfLoggedIn() {
    if (window.localStorage.token) {
        // not logged in so redirect to login page with the return url
        window.location.replace('/');
    }
}
async function loginSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    const response = await login(email, password);
    if (response.error) {
        console.log(response.error); // response.error.response.data -> error message
    }
    else {
        // saves the token into the localStorage. 
        window.localStorage.token = response.data.data.token;
        window.localStorage.user = JSON.stringify(response.data.data.user);
        // .data is needed twice because of initial data / error 
        console.log(response);
        window.location.replace('/');
    }
    return response;
}

const Login = () => {
    redirectIfLoggedIn();

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
                <button type='submit' onClick={ loginSubmit } className='text-[14px] text-secondary text-center mb-[20px]'>Login</button>
                <p className='text-text text-center'>Don't have an account? <span className='text-secondary'>Register</span></p>
            </div>
        </div>
    );
}

export default Login;