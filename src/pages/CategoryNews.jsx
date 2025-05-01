import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams()
    console.log(id,typeof(id))
    return (
        <div>
            Category News

        </div>
    );
};

export default CategoryNews;