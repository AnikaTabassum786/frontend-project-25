import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = use(AuthContext)
    const navigate = useNavigate()
    const handleLogOut=()=>{
        console.log('logout done')
        logOut()
        .then(() => {
            alert('Logout Successfully')
            navigate('/auth/login')
          }).catch((error) => {
            console.log(error.message)
          });
    }
   
    return (
        <div>
           <div className='flex justify-between'>
            <div>{user && user.email}</div>
            <div className='flex items-center gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className='flex items-center gap-5'>
                <div><img className='rounded-full w-12' src={`${user? user.photoURL : userImg}`} alt="" /></div>
                {user? <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button>:<Link to={'/auth/login'}><button className='btn btn-primary px-10'>Login</button></Link>}
               
            </div>

           </div>
        </div>
    );
};

export default Navbar;