import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <h4 class="font-monserrat font-bold">Welcome Back</h4>
                <p class="font-lato">Please enter your login details to access your account.</p>

            </div>
            <div>
                <div>
                    <label class=" font-lato" for="">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
            </div>
            <div>
                <label class="font-lato" for="">Password</label>
                <input type="text" id="password" name="password" />
            </div>
            <button class="font-lato">Login</button>
            <div>
                <p class="font-lato">Don't have an account?</p>
                <a class="font-lato" href="#">Register</a>
            </div>
        </div>
    );
}

export default Login;