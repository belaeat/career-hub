import React from 'react';

const Home = () => {
    return (
        <div className='mx-auto w-[90%] my-12'>
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
                <img className='w-[50%] h-[50%]' src="../../../public/P3OLGJ1 copy 1.png" alt="" />
            </section>
        </div>
    );
};

export default Home;