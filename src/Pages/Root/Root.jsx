import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Loading></Loading>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;