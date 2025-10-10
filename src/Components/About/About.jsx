import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Chart from '../Chart/Chart';
import { addToStoredDB, getStoreApp } from '../../utility/addToDB';
import InstallAppStyle from '../../Pages/ReadList/InstallAppStyle/InstallAppStyle';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiFillLike } from "react-icons/ai";
import { MdOutlineFileDownload } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    setIsInstalled(true);
  };

  const notify = () => toast("Installed!");

  const handleInstalledApp = id => {
    addToStoredDB(id);
  };


  function formatNumber(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    else if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    else if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  }

  let num = parseFloat(singleApp.downloads);
  const formattedDownloads = formatNumber(num);




  function countStar(starnum) {
    if (starnum !== 5.0) return <FaStarHalfAlt className='text-[#FF8811] text-5xl' />;
    else return <FaStar className='text-[#FF8811] text-5xl' />;
  }

  let star = countStar(singleApp.ratingAvg);


  return (
    <div>
      <div className='w-11/12 mx-auto my-20'>
        <div className='grid lg:grid-cols-4 gap-10'>
          <img className='w-full h-full' src={singleApp.image} alt="" />
          <div className='lg:col-span-3'>
            <h1>{singleApp.title}</h1>
            <p>Developed by <span>{singleApp.companyName}</span></p>
            <div className='border-b my-8'></div>
            <div>
              <div className="flex items-center gap-6">
                <div>
                  <MdOutlineFileDownload className="text-5xl text-green-400" />
                  <p>Downloads</p>
                  <span className='font-bold text-3xl'>{formattedDownloads}</span>
                </div>
                <div>
                  {
                    star
                  }
                  <p>Average Ratings</p>
                  <span className='font-bold text-3xl'>{singleApp.ratingAvg}</span>
                </div>
                <div>
                  <AiFillLike className="text-5xl text-[#632EE3]" />
                  <p>Total Reviews</p>
                  <span className='font-bold text-3xl'>{singleApp.reviews}</span>
                </div>
              </div>
            </div>
            {isInstalled ? (
              <button
                onClick={() => {
                  handleInstalledApp(singleApp.id.toString());
                }}
                className='btn bg-gray-400 text-white mt-8 di'
              disabled>
                Installed ({singleApp.size})
              </button>
            ) : (
              <button
                onClick={() => {handleInstallApp(singleApp.id.toString());
                notify();}
                }
                className='btn bg-blue-500 text-white mt-8'
              >
                Install
              </button>
            )}
            {
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            }
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
