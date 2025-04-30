import React from 'react';
import { NavLink } from 'react-router';
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
               <button className='btn btn-primary px-10'>Login</button>
            </div>

           </div>
        </div>
    );
};

export default Navbar;