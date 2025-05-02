import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <p className='text-xl text-center pt-4'>Login Your Account</p>
                        <div className="card-body">
                            <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <div className='text-center'>
                                You have an account? <Link to='/auth/register'><span className='text-red-500 hover:underline cursor-pointer'>Login</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;