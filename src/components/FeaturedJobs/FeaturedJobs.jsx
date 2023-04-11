import React from 'react';

const FeaturedJobs = ({job}) => {
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, fullOrPartTime, location, salary} = job;

    return (
        <div className='mx-auto border border-slate-300 p-8 w-[70%] gap-7 mb-7'>
            <img src={companyLogo} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <div className='flex'>
                <button>{remoteOrOnsite}</button>
                <button>{fullOrPartTime}</button>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div> 
            <button>View Details</button>
        </div>
    );
};

export default FeaturedJobs;