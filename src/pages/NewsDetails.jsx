// import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
// import headerImage from '../assets/logo.png'
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {

    const [newsDetailData,setNewsDetailData] = useState()
   
    const data = useLoaderData();
    console.log(data)

    const {id} = useParams()

    useEffect(()=>{
       const newsData = data.find(news=> news.id ==id)
       console.log(newsData)
       setNewsDetailData(newsData)
    },[id,data])

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto  grid grid-cols-12'>
               <section className='col-span-9'>
                News Details
                <NewsDetailsCard newsDetailData={newsDetailData}></NewsDetailsCard>
               </section>
               <aside className='col-span-3'>
               <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default NewsDetails;