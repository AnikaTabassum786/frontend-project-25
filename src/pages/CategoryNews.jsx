import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const {id} = useParams()
    //  const paramId = parseInt(id)
    const data = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])

    console.log(data,id,typeof(id))

    useEffect(()=>{

          if(id == '0'){
            setCategoryNews(data)
            return
          }
          else if(id == '1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
             setCategoryNews(filteredNews)
          }
          else{
            const filteredData = data.filter(news => news.category_id == id)
            // console.log(filteredData)
            setCategoryNews(filteredData)
          }
          
    },[data,id])
    
    return (
        <div>
            {/* Category News - {categoryNews.length} */}

            <div className='mx-auto'>
                {
                    categoryNews.map((news)=>{
                        return(
                            <NewsCard news={news}>
                             
                            </NewsCard>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default CategoryNews;