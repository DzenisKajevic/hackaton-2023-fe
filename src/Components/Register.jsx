import React from 'react';

const Register = () => {
    return (
        <div>
            <div>
                <h4 className="font-monserrat font-bold">Get Started</h4>
                <p className="font-lato">Creating an account is easy! Simply fill out the form below to get started.</p>
            </div>
            <div>
                <div>
                    <label className=" font-lato" htmlFor="">First Name</label>
                    <input type=" text" id="fname" name="fname" />
                </div>
                <div>
                    <label className="font-lato" htmlFor="">Last Name</label>
                    <input type="text" id="lname" name="lname" />
                </div>
            </div>
            <div>
                <div>
                    <label className="font-lato" htmlFor="">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label className="font-lato" htmlFor="">Password</label>
                    <input type="text" id="password" name="password" />
                </div>
            </div>
            <button className="font-lato">Register</button>

            <div>
                <p className="font-lato">Already have an account?</p>
                <a className="font-lato" href="#">Login</a>
            </div>
        </div>
    );
}

export default Register;