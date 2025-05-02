import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser,setUser} = use(AuthContext)

    const handleRegister=(e)=>{
         e.preventDefault();

         const name = e.target.name.value;
         const email = e.target.email.value;
         const photo =e.target.photo.value
         const password = e.target.password.value
         console.log(name,email,photo,password)

         createUser(email,password)
         .then(result=>{
            const user = result.user;
            // console.log(user)
            //  setUser(user)
            alert('Register Done')
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code',errorCode,'Error Message',errorMessage)
          });
    }
    return (
        <div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <p className='text-xl text-center pt-4'>Login Your Account</p>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />

                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>

                            </form>
                            <div className='text-center'>
                                You have an account? <Link to='/auth/login'><span className='text-red-500 hover:underline cursor-pointer'>Login</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;