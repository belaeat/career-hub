import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className=' mx-auto w-[90%] flex justify-between items-center mt-5'>
            <h1 className='text-4xl font-bold'>Job Hunt</h1>
            <div className='flex gap-12 font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button className='button-color font-semibold bg-purple-400 text-white p-3 rounded-lg'>Start Applying</button>
        </nav>
    );
};

export default Header;