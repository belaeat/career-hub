import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fullOrPartTime, location, salary } = job;


    return (
        <div>
            <div className='mx-auto border border-slate-300 p-8 md:w-[70%] gap-7 mb-7'>
                <img className='mb-3' src={companyLogo} alt="" />
                <h3 className='font-bold text-xl mb-2'>{jobTitle}</h3>
                <p className='mb-2'>{companyName}</p>
                <div className='flex gap-6 mb-2'>
                    <button className='outline-purple-300 outline font-semibold p-2 px-3 rounded-lg'>{remoteOrOnsite}</button>
                    <button className='outline-purple-300 outline font-semibold p-2 px-3 rounded-lg'>{fullOrPartTime}</button>
                </div>
                <div className='flex justify-between my-3'>
                    <p className='flex gap-2 mb-1'><span><img src="/Location Icon.png" alt="" /></span> {location}</p>
                    <p className='flex gap-2 mb-1'><span><img src="/Frame.png" alt="" /></span> {salary}</p>
                </div>
                <button><Link className='button-color font-semibold text-white p-3 rounded-lg' to={`/job/${id}`}>View Details</Link></button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default FeaturedJobs;