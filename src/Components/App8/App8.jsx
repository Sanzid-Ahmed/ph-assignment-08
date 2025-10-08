import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const App8 = ({ app }) => {

    console.log(app);


    function formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
        else if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        else if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    }


    function countStar(starnum){
        if(starnum !== 5.0) return <FaStarHalfAlt className='text-[#FF8811]' />;
        else return <FaStar className='text-[#FF8811]' />;
    }

    let num = parseFloat(app.downloads);
    const formattedDownloads = formatNumber(num);


    let star = countStar(app.ratingAvg);

    return (
        <div className='p-4 rounded-md'>
            <img className='h-[250px] w-full rounded-sm' src={app.image} alt="" />
            <p className='mt-2'>{app.title}</p>
            <div className='flex justify-between mt-3'>
                <div>
                    <div className="flex items-center bg-[#F1F5E8] gap-2 p-1 rounded-sm w-20">
                        <MdOutlineFileDownload className="text-xl text-green-400" />
                        <span className='text-green-400'>{formattedDownloads}</span>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-[#F1F5E8] gap-2 p-1 rounded-sm w-20">
                        {
                            star
                        }
                        <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App8;