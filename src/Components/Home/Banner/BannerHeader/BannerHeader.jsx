import React from 'react';
import playStore from "../../../../assets/playStore.png";
import appStore from "../../../../assets/appStore.png";

const BannerHeader = () => {
    return (
        <div className='pt-20 mb-10'>
            <h1 className='text-center font-bold text-5xl'>We Build <br/><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
            <div className='lg:max-w-3/4 mx-auto mt-4'>
                 <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                 <div className='flex justify-center gap-5 mt-10'>
                    <a className='btn font-bold' href='https://play.google.com/store/games?hl=en' target="_blank"><img className='w-[20px]' src={playStore} alt="" />Google Play</a>
                    <a className='btn font-bold' href='https://www.apple.com/app-store/' target="_blank"><img className='w-[25px]' src={appStore} alt="" />App Store</a>
                 </div>
                 
            </div>
           
        </div>
    );
};

export default BannerHeader;