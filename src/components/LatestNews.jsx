import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([])

    useEffect(() => {
        fetch('/news.json')
            .then((res) => res.json()) // ✅ Convert to JSON
            .then((data) => {
                // console.log(data);
                setLatestNews(data); // now data is an array (if news.json is correct)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filterLetestNews = latestNews.filter((item)=>item?.others?.is_today_pick == true )
    console.log(filterLetestNews)

    return (
        <div className='flex items-center gap-2 bg-base-200 p-2'>
            <p className='bg-secondary py-2 px-3'>Latest</p>

            <Marquee>
                {
                    filterLetestNews.length>0 ?(
                       
                        filterLetestNews.map((news)=>{
                            return(
                                <>
                                {news.title}
                                </>
                            )
                        })
                       
                    ):(
                        <>No breaking news</>
                    )
                }
            </Marquee>
            
            {/* <Marquee pauseOnHover={true} speed={120}> 
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='bg-base-200 py-2 px-3 font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
            </Marquee> */}
        </div>
    );
};

export default LatestNews;