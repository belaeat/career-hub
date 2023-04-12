import React, { useEffect } from 'react';
import { getFromDb } from '../../utilities/fakebd';
import { useLoaderData } from 'react-router-dom';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    // console.log(appliedJobs)

    // useEffect(() => {
    //     const storedJobs = getFromDb();
    //     console.log(storedJobs)
    //     for (const id in storedJobs){
    //         // console.log(id)
    //         const addedJob = appliedJobs.find(jobItem => jobItem[id] === id)
    //         console.log(addedJob)
    //     }
    // }, [])

    return (
        <div className=' mx-auto w-[90%]'>
            <div className='text-right my-12 dropdown'>
            </div>
            <div>
                {
                    appliedJobs.map(job => <ReviewJobs
                        key={job.id}
                        job={job}
                    ></ReviewJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;