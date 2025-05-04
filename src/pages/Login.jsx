import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase.config';
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  
  const {signInUser} = use(AuthContext)   
  const navigate = useNavigate()
  const location = useLocation()

  const [error,setError] = useState('')
  const [success,setSuccess] = useState(false)
  const emailRef = useRef()

  const handleLogin=(e)=>{
    
      e.preventDefault()

      const email = e.target.email.value;
      const password = e.target.password.value 
      console.log(email,password)

      setError(' ')
      setSuccess(false)
      

      signInUser(email,password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user)

        signInWithEmailAndPassword(auth,email,password)
          .then(result=>{
            if(result.user.emailVerified === true)
            {
                 setSuccess(true)
                // console.log(result)
                 alert('Login Done')
                //  navigate(location?.state || '/category/0')
            }
            // else{
            //     alert('Please Verify You Email')
            //     setSuccess(false)
            //     // console.log(result)
            //     // alert('Login Done')
            // }
            
          })
        
          navigate(location?.state || '/category/0')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        setError(errorMessage)
      });
  }

  const handleForgotPassword=()=>{
        const email = emailRef.current.value;
        console.log(email) 

        // setError('')

        // if (!email) {
        //   alert('Please enter your email address first');
        //   return;
        // }

        sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("A Password reset Email is Send")
        })
        .catch((error) => {
           const errorCode = error.code;
          const errorMessage = error.message;
           console.log(errorCode,errorMessage)
          setError(errorMessage)
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
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div>
           {error && <p className='text-red-500'>{error}</p>}
          </div>
          <div onClick={handleForgotPassword}><a className="link link-hover">Forgot password?</a></div>
         
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