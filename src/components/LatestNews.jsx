import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-200 p-2'>
            <p className='bg-secondary py-2 px-3'>Latest</p>
            <Marquee pauseOnHover={true} speed={120}> 
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;