import React from 'react';
import BannerHeader from './BannerHeader/BannerHeader';
import BannerImages from './BannerImages/BannerImages';
import BannerBotom from './BannerBotom/BannerBotom';

const Banner = () => {
    return (
        <div>
            <BannerHeader></BannerHeader>
            <BannerImages></BannerImages>
            <BannerBotom></BannerBotom>
        </div>
    );
};

export default Banner;