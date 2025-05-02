import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div>
           <div className='flex justify-between'>
            <div></div>
            <div className='flex items-center gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className='flex items-center gap-5'>
                <div><img src={userImg} alt="" /></div>
               <Link to={'/auth/login'}><button className='btn btn-primary px-10'>Login</button></Link>
            </div>

           </div>
        </div>
    );
};

export default Navbar;