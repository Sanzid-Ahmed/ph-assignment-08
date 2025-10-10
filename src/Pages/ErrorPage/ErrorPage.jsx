import React from 'react';
import error from "../../assets/error-404.png";
import { useNavigate } from 'react-router';

const ErrorPage = () => {


    const navigate = useNavigate();

    return (
        <div className='grid justify-center items-center gap-5 mt-50'>
            <img src={error} alt="" />
            <h1 className='text-5xl text-center'>Oops, page not found!</h1>
            <p className='text-center'>The page you are looking for is not available.</p>
            <button
                onClick={() => navigate(-1)}
                className="btn mx-auto w-[150px] bg-linear-150 from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded mt-4"
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;