import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <h4 className="font-monserrat font-bold">Welcome Back</h4>
                <p className="font-lato">Please enter your login details to access your account.</p>

            </div>
            <div>
                <div>
                    <label className=" font-lato" htmlFor="">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
            </div>
            <div>
                <label className="font-lato" htmlFor="">Password</label>
                <input type="text" id="password" name="password" />
            </div>
            <button className="font-lato">Login</button>
            <div>
                <p className="font-lato">Don't have an account?</p>
                <a className="font-lato" href="#">Register</a>
            </div>
        </div>
    );
}

export default Login;