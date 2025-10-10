import React from 'react';
import { removeFromStoredDB } from '../../../utility/addToDB';

const InstallAppStyle = ({app}) => {
    return (
        <div className='p-4 flex justify-between'>
            <div className='flex gap-4'>
                <img className='w-20 h-20 rounded-sm' src={app.image} alt="" />
                <div>
                    <h3>{app.title}</h3>
                </div>
            </div>
            <button onClick={()=> removeFromStoredDB(app.id)} className='btn p-3 bg-[#00D390]'>Uninstall</button>
        </div>
    );
};

export default InstallAppStyle;