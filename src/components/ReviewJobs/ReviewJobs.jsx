import React from 'react';
import { Link } from 'react-router-dom';

const ReviewJobs = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fullOrPartTime, salary } = job;
    return (
        <div className='my-12'>
            <div>
                <div className='mx-auto  mb-8 bg-slate-50 rounded-lg p-6 border flex items-center gap-8'>
                    <div>
                        <img src={companyLogo} alt="" />
                    </div>

                    <div className='flex justify-between items-center grow'>
                        <div>
                            <h3 className='font-bold text-xl my-2'>{jobTitle}</h3>
                            <p className='my-2'>{companyName}</p>
                            <div className='flex gap-4 my-3'>
                                <p className='outline-purple-300 outline font-semibold p-2 px-3 rounded-lg'>{remoteOrOnsite}</p>
                                <p className='outline-purple-300 outline font-semibold p-2 px-3 rounded-lg'>{fullOrPartTime}</p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-2'>
                                    <img src='/Frame-4.png' alt="" />
                                    <p>{location}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src='/Frame.png' alt="" />
                                    <p>{salary}</p>
                                </div>
                            </div>
                        </div>
                        <button><Link className='button-color font-semibold text-white p-3 rounded-lg' to={`/job/${id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewJobs;