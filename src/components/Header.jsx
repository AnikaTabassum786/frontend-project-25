import React from 'react';
import headerImage from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
           <img className='w-[350px]' src={headerImage} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p>{format(new Date(), "EEEE, MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;