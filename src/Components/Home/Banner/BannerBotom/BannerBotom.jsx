import React from 'react';

const BannerBotom = () => {
    return (
        <div className='p-20 bg-linear-65 from-[#632EE3] to-[#9F62F2]'>
            <h1 className='font-bold text-3xl mb-10 text-center'>Trusted by Millions, Built for You</h1>
            <div className='flex lg:flex-row flex-col justify-between'>
                <div className='py-4 text-center'>
                    <p>Total Downloads</p>
                    <h1 className='font-bold text-5xl'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='py-4 text-center'>
                    <p>Total Reviews</p>
                    <h1 className='font-bold text-5xl'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className='py-4 text-center'>
                    <p>Active Apps</p>
                    <h1 className='font-bold text-5xl'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBotom;