import React, { useEffect, useState } from 'react';
import App16 from '../../Components/App16/App16';

const Allapps = () => {

    const [data, setData] = useState([]);;
    const [search, setSearch] = useState("");

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetch("json16Data.json").then(res => res.json()).then(setData);
    }, []);


    const filteredData = data.filter((f) => {
        if (search === "") return f;
        else if (f.title.toLowerCase().includes(search.toLowerCase())) return f;
    });

    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
                <div className='p-20'>
                    <div className='flex justify-between p-4'>
                        <p>({data.length}) Apps Found</p>
                        <div>
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" onChange={updateSearch} />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-3'>
                        {
                            filteredData.length > 0 ? (
                                filteredData.map((app) => <App16 key={app.id} app={app} />)
                            ) : (
                                <h1 className='col-span-4 text-center text-gray-500 font-bold text-5xl'>
                                    No apps found
                                </h1> 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allapps;