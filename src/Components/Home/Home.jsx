import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import App8 from '../App8/App8';
import Allapps from '../../Pages/Allapps/Allapps';
import { NavLink } from 'react-router';

const Home = () => {

    const [data, setData] = useState([]);;

    useEffect(() => {
        fetch("json8Data.json").then(res => res.json()).then(setData);
    }, []);


    return (
        <div>
            <Banner></Banner>
            <div className='p-20'>
                <h1 className='mb-4 text-center font-bold text-5xl'>Trending Apps</h1>
                <p className='mb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid lg:grid-cols-4 gap-3'>
                    {
                        data.map(app => <App8 app={app} ></App8>)
                    }
                </div>
                <div className='flex justify-center mt-10'>
                    <NavLink to="/allApps"><button className='btn bg-linear-95 from-[#632EE3] to-[#9F62F2] p-4'>Show All</button></NavLink>
                </div>
            </div>
            {/* <Allapps></Allapps> */}
        </div>
    );
};

export default Home;