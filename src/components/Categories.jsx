import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
    .then((res) => res.json())

const Categories = () => {

    console.log(categoryPromise)
    const categories = use(categoryPromise)
    // console.log(categories)

    //    useEffect(()=>{
    //       fetch('/categories.json')
    //       .then((res)=>res.json())
    //       .then((data)=>{
    //         console.log(data)
    //       })
    //    },[])

    return (
        <div>
            <p className='font-bold text-2xl'>All categories ({categories.length})</p>

            <div className='grid grid-cols-1 gap-2  '>
                {categories.map((category) => {
                    return (
                        <div key={category.id}>
                            <NavLink to={`/category/${category.id}`} className={({ isActive }) =>
                                `btn w-full  text-accent border-0 bg-base-100 hover:bg-base-200 place-content-center ${isActive ? "active font-bold bg-base-200" : ""}`

                            }
                                key={category.id}>{category.name}</NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Categories;