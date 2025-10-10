import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Chart from '../Chart/Chart';
import { addToStoredDB, getStoreApp, removeFromStoredDB } from '../../utility/addToDB';

const About = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find(app => app.id === appId);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const storedAppData = getStoreApp().map(id => parseInt(id));
    setIsInstalled(storedAppData.includes(singleApp.id));
  }, [singleApp.id]);

  const handleInstallApp = id => {
    addToStoredDB(id);
    setIsInstalled(true); // ✅ update state instantly
  };

  const handleUninstallApp = id => {
    removeFromStoredDB(id);
    setIsInstalled(false); // ✅ update state instantly
  };

  return (
    <div>
      <div className='w-11/12 mx-auto my-20'>
        <div className='grid grid-cols-4 gap-10'>
          <img className='w-full h-full' src={singleApp.image} alt="" />
          <div className='col-span-3'>
            <h1>{singleApp.title}</h1>
            <p>Developed by <span>{singleApp.companyName}</span></p>
            <div className='border-b my-8'></div>

            {isInstalled ? (
              <button
                onClick={() => handleUninstallApp(singleApp.id.toString())}
                className='btn bg-gray-400 text-white'
              >
                Installed (Click to Uninstall)
              </button>
            ) : (
              <button
                onClick={() => handleInstallApp(singleApp.id.toString())}
                className='btn bg-blue-500 text-white'
              >
                Install
              </button>
            )}
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
