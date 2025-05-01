import React from 'react';
import image1 from '../../assets/swimming.png'
import image2 from '../../assets/class.png'
import image3 from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
           <p className='font-semibold text-xl'>Q zone </p>
           <img src={image1} alt="Image" />
           <img src={image2} alt="Image" />
           <img src={image3} alt="" />
        </div>
    );
};

export default Qzone;