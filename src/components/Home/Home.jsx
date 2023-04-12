import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobCategories = useLoaderData();

    // fetching jobsData.json file from public folder
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/jobsData.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='mx-auto w-[90%] my-12'>

            {/* Banner Section */}

            <section className='md:flex items-center'>
                <div className='mb-8 mx-auto'>
                    <h1 className='text-6xl font-bold my-8'>One Step
                        <br />
                        Closer To Your
                        <br />
                        <span className='highlighted-text'>Dream Job</span></h1>
                    <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='button-color font-semibold text-white p-3 rounded-lg'>Get Started</button>
                </div>
                <img className='w-[50%] h-[50%] mx-auto' src="/P3OLGJ1 copy 1.png" alt="" />
            </section>

            {/* Job Category here */}

            <section>
                <div className='my-12 text-center'>
                    <h2 className='text-4xl font-bold mb-3'>Job Category List</h2>
                    <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                </div>
                <div className='md:flex justify-between items-center my-12'>
                    {
                        jobCategories.map(category => <JobCategory
                            key={category._id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </section>

            {/* Featured Job Section Here */}

            <section className='mx-auto'>
                <div className='my-12 text-center'>
                    <h2 className='text-4xl font-bold mb-3'>Featured Jobs</h2>
                    <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                </div>
                <div className='grid md:grid-cols-2'>
                    {
                        jobs.map(job => <FeaturedJobs
                            key={job.id}
                            job={job}
                        ></FeaturedJobs>)
                    }
                </div>
            </section>
            <div className='mx-auto text-center my-12'>
                <button className='button-color font-semibold text-white p-3 rounded-lg'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Home;