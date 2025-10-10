import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const InstallAppStyle = ({ app, handleUninstall, notify }) => {


    function formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
        else if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        else if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    }

    let num = parseFloat(app.downloads);
    const formattedDownloads = formatNumber(num);




    function countStar(starnum) {
        if (starnum !== 5.0) return <FaStarHalfAlt className='text-[#FF8811]' />;
        else return <FaStar className='text-[#FF8811]' />;
    }

    let star = countStar(app.ratingAvg);


    // const notify = () => toast("Installed!");

    return (
        <div>
            <div className='p-4 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between'>
                <div className='flex gap-4'>
                    <img className='w-20 h-20 rounded-sm' src={app.image} alt="" />
                    <div>
                        <h3>{app.title}</h3>
                        <div className='mt-5 flex gap-5'>
                            <div className="flex items-center">
                                <MdOutlineFileDownload className="text-xl text-green-400" />
                                <span className='text-green-400'>{formattedDownloads}</span>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                {
                                    star
                                }
                                <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                            </div>
                            <p className='text-gray-400'>{app.size}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        handleUninstall(app.id);
                        notify();
                    }
                    } className='btn p-3 bg-[#00D390]'>Uninstall</button>
                </div>

            </div>
        </div>
    );
};

export default InstallAppStyle;