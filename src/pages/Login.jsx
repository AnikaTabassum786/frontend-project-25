import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {signInUser} = use(AuthContext)
  const handleLogin=(e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value 
      console.log(email,password)

      signInUser(email,password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user)
        alert('Login Done')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  }
    return (
        <div>
            <div className=" ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div> */}
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <p className='text-xl text-center pt-4'>Login Your Account</p>
      <div className="card-body">
        <form onSubmit={handleLogin}>

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div className='text-center'>
            Don't have an account? <Link to='/auth/register'><span className='text-red-500 hover:underline cursor-pointer'>Register</span></Link>
        </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Login;