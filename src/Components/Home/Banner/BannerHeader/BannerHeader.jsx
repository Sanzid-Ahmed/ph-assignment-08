import React from 'react';
import playStore from "../../../../assets/playStore.png";
import appStore from "../../../../assets/appStore.png";

const BannerHeader = () => {
    return (
        <div className='pt-20 mb-10'>
            <h1 className='text-center font-bold text-5xl'>We Build <br/><span>Productive</span> Apps</h1>
            <div className='lg:max-w-3/4 mx-auto mt-4'>
                 <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                 <div className='flex justify-center gap-5 mt-10'>
                    <button className='btn font-bold'><img className='w-[20px]' src={playStore} alt="" />Google Play</button>
                    <button className='btn font-bold'><img className='w-[25px]' src={appStore} alt="" />App Store</button>
                 </div>
                 
            </div>
           
        </div>
    );
};

export default BannerHeader;