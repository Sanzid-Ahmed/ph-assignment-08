import React, { useEffect, useState } from 'react';
import { getStoreApp, removeFromStoredDB } from '../../utility/addToDB';
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
    }, []);


    const handleUninstall = (id) => {
        setInstallApp(prev => prev.filter(app => app.id !== id));

        removeFromStoredDB(id);
    };


    const handleSort = (type) => {
    let sortedApps = [...installApp];
    if (type === "downloadsHL") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (type === "downloadsLH") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setInstallApp(sortedApps);
  };

    return (
        <div className='min-h-[75vh]'>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
                <div className='p-20'>
                    <div className='flex justify-between p-4'>
                        <p>({installApp.length}) Apps Found</p>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By downloads</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={() => handleSort("downloadsHL")}>High-Low</a></li>
                                <li><a onClick={() => handleSort("downloadsLH")}>Low-High</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {
                            installApp.map(app => <InstallAppStyle app={app} handleUninstall={handleUninstall}></InstallAppStyle>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadList;