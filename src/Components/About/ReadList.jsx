import React, { useEffect, useState } from 'react';
import { getStoreApp } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import InstallAppStyle from './InstallAppStyle/InstallAppStyle';

const ReadList = () => {
    const [installApps, setInstallApps] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoreApp().map(id => parseInt(id));
        const installedApps = data.filter(app => storedAppData.includes(app.id));
        setInstallApps(installedApps);
    }, [data]);

    const handleUninstall = (id) => {
        setInstallApps(prev => prev.filter(app => app.id !== id)); // update UI immediately
    };

    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='p-20'>
                <div className='flex justify-between p-4'>
                    <p>({installApps.length}) Apps Found</p>
                </div>
                <div>
                    {installApps.map(app => (
                        <InstallAppStyle key={app.id} app={app} onUninstall={handleUninstall} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadList;
