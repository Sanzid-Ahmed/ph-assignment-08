import React, { useEffect, useState } from 'react';
import { getStoreApp } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import InstallAppStyle from './InstallAppStyle/InstallAppStyle';

const ReadList = () => {


    const [installApp, setInstallApp] = useState([])
    const data = useLoaderData();


    useEffect(() => {
        const storedAppData = getStoreApp();
        const convertedStoredAppData = storedAppData.map(id => parseInt(id));
        const installedApps = data.filter(app => convertedStoredAppData.includes(app.id));

        setInstallApp(installedApps);
    }, [])


    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
                <div className='p-20'>
                    <div className='flex justify-between p-4'>
                        <p>({installApp.length}) Apps Found</p>
                    </div>
                    <div>
                        {
                            installApp.map(app => <InstallAppStyle app={app}></InstallAppStyle>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadList;