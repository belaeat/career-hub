import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCategories = useLoaderData();

    return (
        <div className='mx-auto w-[90%] my-12'>

            {/* Banner Section */}

            <section className='flex md:flex items-center'>
                <div className='w-[50%]'>
                    <h1 className='text-6xl font-bold my-8'>One Step 
                    <br />
                    Closer To Your 
                    <br />
                    <span className='highlighted-text'>Dream Job</span></h1>
                    <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='button-color font-semibold text-white p-3 rounded-lg'>Get Started</button>
                </div>
                <img className='w-[50%] h-[50%]' src="/P3OLGJ1 copy 1.png" alt="" />
            </section>

            {/* Job Category here */}
            
            <section className='flex md:flex justify-between items-center my-12'>
                {
                    jobCategories.map(category => <JobCategory
                        key={category.id}
                        category={category}                        
                    ></JobCategory>)
                }
            </section>
        </div>
    );
};

export default Home;