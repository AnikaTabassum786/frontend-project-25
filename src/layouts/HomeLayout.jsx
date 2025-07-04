import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from './Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-4 w-11/12 mx-auto my-3'>
                <aside className='main col-span-3 sticky top-0 h-fit'>
                   <LeftAside></LeftAside> 
                </aside>
               
                <section className='col-span-6'>
                    {state== 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;