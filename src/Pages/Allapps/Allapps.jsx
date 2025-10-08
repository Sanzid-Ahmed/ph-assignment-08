import React, { useEffect, useState } from 'react';
import App16 from '../../Components/App16/App16';

const Allapps = () => {

    const [data, setData] = useState([]);;

    useEffect(() => {
        fetch("json16Data.json").then(res => res.json()).then(setData);
    }, []);

    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
                <div className='p-20'>
                    <div>
                        <p>({data.length}) Apps Found</p>
                    </div>
                    <div className='grid grid-cols-4 gap-3'>
                    {
                        data.map(app => <App16 app={app}></App16>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Allapps;