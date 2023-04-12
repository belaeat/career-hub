import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' mx-auto w-[90%] md:flex justify-between items-center mt-5'>
            <h1 className='text-4xl font-bold mb-8 text-center'>Job Hunt</h1>
            <div className='md:flex gap-12 font-semibold mb-8 text-center justify-between'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className='text-center'>
                <button className='button-color font-semibold text-white p-3 rounded-lg'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;