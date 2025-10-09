import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const About = () => {

    const {id} = useParams();
    console.log(id);
    const appId = parseInt(id);

    const data = useLoaderData();
    console.log(data);



    const singleApp = data.find(app => app.id === appId)
    console.log(singleApp);


    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-4 gap-10'>
                <img src={singleApp.image} alt="" />
                <div className='col-span-3'>
                    <h1>{singleApp.title}</h1>
                    <p>Developed by <span>{singleApp.companyName}</span></p>
                    <div className='border my-8'></div>
                </div>
            </div>
        </div>
    );
};

export default About;