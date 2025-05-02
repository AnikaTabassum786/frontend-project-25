import React from 'react';

const NewsCard = ({news}) => {
    const {title,author,thumbnail_url} = news 

    return (
        <div>
          <p>{title}</p>
          <img src={author.img} alt="" />
          <img src={thumbnail_url} alt="" />
        </div>
    );
};

export default NewsCard;