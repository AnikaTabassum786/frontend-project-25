import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({newsDetailData}) => {

    if(!newsDetailData){
        return <p>Loading data</p>
    }

    const {image_url,title,details} = newsDetailData
    return (
        <div>
            <img src={image_url} alt="" />
            <p>{title}</p>
            <p>{details}</p>
            <Link to={`/category/${newsDetailData.category_id}`}> <button className=' btn bg-secondary text-white'>All news in this category</button> </Link>
        </div>
    );
};

export default NewsDetailsCard;