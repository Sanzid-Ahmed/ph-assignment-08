import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Chart from '../Chart/Chart';

const About = () => {

    const { id } = useParams();
    console.log(id);
    const appId = parseInt(id);

    const data = useLoaderData();
    console.log(data);



    const singleApp = data.find(app => app.id === appId)
    console.log(singleApp);


    return (
        <div>
            <div className='w-11/12 mx-auto my-20'>
                <div className='grid grid-cols-4 gap-10'>
                    <img className='w-full h-full' src={singleApp.image} alt="" />
                    <div className='col-span-3'>
                        <h1>{singleApp.title}</h1>
                        <p>Developed by <span>{singleApp.companyName}</span></p>
                        <div className='border-b my-8'></div>
                    </div>
                </div>
                <div className='border-b my-10'></div>
                <div>
                    <Chart singleApp={singleApp}></Chart>
                    <div className='border-b my-10'></div>
                    <h1 className='font-bold text-2xl'>Description</h1>
                    <p className='mt-6'>{singleApp.description}</p>
                </div>
            </div>
        </div>
    );
};

export default About;