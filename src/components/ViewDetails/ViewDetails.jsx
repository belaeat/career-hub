import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const jobDetails = useLoaderData();
    const [job, setJob] = useState({});

    const checkData = jobDetails.find(jobItem => jobItem.id == id)
    // console.log(job.jobDescription)

    useEffect(() => {

        setJob(checkData);

    }, [checkData]);

    return (
        <div className='flex items-center justify-between w-[90%] mx-auto my-12'>
            <div className='w-[60%]'>
                <h2 className='mb-5'><span className='font-bold text-lg'>Job Description: </span>{job.jobDescription}</h2>
                <h2 className='mb-5'><span className='font-bold text-lg'>Job Responsibility: </span>{job.jobResponsibilities}</h2>
                <h2 className='mb-5 font-bold text-lg'>Educational Requirements:</h2>
                <p className='mb-5'>{job.educationalRequirements}</p>
                <h2 className='mb-5 font-bold text-lg'>Experience:</h2>
                <p className='mb-5'>{job.experiences}</p>
            </div>
            <div className='w-[30%]'>
                <div className='rounded-lg bg-purple-100 p-4 mb-5'>
                    <h3 className='font-bold mb-3'>Job Details</h3>
                    <hr />
                    <div className='my-3 flex gap-2'>
                        <img src='/Frame.png' alt="" />
                        <p><span className='font-semibold'>Salary: </span>{job.salary} (Per Month)</p>
                    </div>
                    <div className='my-3 flex gap-2'>
                        <img src='/Frame-1.png' alt="" />
                        <p><span className='font-semibold'>Job Title: </span>{job.jobTitle}</p>
                    </div>


                    <h3 className='font-bold mb-3'>Contact Information</h3>
                    <hr />
                    <div className='my-3 flex gap-2'>
                        <img src='/Frame-2.png' alt="" />
                        <p><span className='font-semibold'>Phone: </span>{job.phone}</p>
                    </div>
                    <div className='my-3 flex gap-2'>
                        <img src='/Frame-1.png' alt="" />
                        <p><span className='font-semibold'>Email: </span>{job.email}</p>
                    </div>
                    <div className='my-3 flex gap-2'>
                        <img src='/Frame-1.png' alt="" />
                        <p><span className='font-semibold'>Address: </span>{job.location}</p>
                    </div>
                </div>
                <button className='button-color font-semibold text-white p-3 px-12 rounded-lg w-full'>Apply Now</button>
            </div>
        </div>
    );
};

export default ViewDetails;