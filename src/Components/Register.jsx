import React from 'react';

const Register = () => {
    return (
        <div>
            <div>
                <h4 class="font-monserrat font-bold">Get Started</h4>
                <p class="font-lato">Creating an account is easy! Simply fill out the form below to get started.</p>
            </div>
            <div>
                <div>
                    <label class=" font-lato" for="">First Name</label>
                    <input type=" text" id="fname" name="fname" />
                </div>
                <div>
                    <label class="font-lato" for="">Last Name</label>
                    <input type="text" id="lname" name="lname" />
                </div>
            </div>
            <div>
                <div>
                    <label class="font-lato" for="">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label class="font-lato" for="">Password</label>
                    <input type="text" id="password" name="password" />
                </div>
            </div>
            <button class="font-lato">Register</button>

            <div>
                <p class="font-lato">Already have an account?</p>
                <a class="font-lato" href="#">Login</a>
            </div>
        </div>
    );
}

export default Register;