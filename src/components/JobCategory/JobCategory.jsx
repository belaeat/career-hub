import React from 'react';

const JobCategory = ({ category }) => {
    const { logo, name, jobsAvailable } = category;

    return (
        <div >
            <div className='rounded-lg bg-purple-50 p-12'>
                <img className='mb-5' src={logo} alt="" />
                <h3 className='mb-3 font-bold text-xl'>{name}</h3>
                <p><small className='text-slate-400'>{jobsAvailable} Jobs Available</small></p>
            </div>
        </div>
    );
};

export default JobCategory;