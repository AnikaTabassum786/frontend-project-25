import React, { use } from 'react';

const categoryPromise = fetch('/categories.json')
                        .then((res)=>res.json())

const Categories = () => {

    // console.log(categoryPromise)
    const categories = use(categoryPromise)
    console.log(categories)

    return (
        <div>
            <p className='font-bold text-2xl'>All categories {categories.length}</p>
        </div>
    );
};

export default Categories;