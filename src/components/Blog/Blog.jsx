import React from 'react';

const Blog = () => {
    return (
        <div className='text-center my-12'>
            <h2 className=' my-12 text-3xl font-bold'>Blog</h2>
            <div className='p-12 mt-5 bg-green-100 rounded-lg w-[70%] mx-auto'>
                <h2 className='text-2xl font-bold mb-5'>When should you use context API?</h2>
                <p> The Context API is useful when you need to share data or state between multiple components in your application, especially when those components are not directly related to each other in the component tree.</p>
            </div>
            <div className='p-12 mt-5 bg-green-100 rounded-lg w-[70%] mx-auto'>
                <h2 className='text-2xl font-bold mb-5'>What is a custom hook?</h2>
                <p>In React, hooks are functions that let you use state and other React features in functional components. A custom hook is simply a function that uses one or more of these existing hooks to encapsulate a specific behavior or functionality. By creating custom hooks, you can extract reusable logic from your components and share it across your application.</p>
            </div>
            <div className='p-12 mt-5 bg-green-100 rounded-lg w-[70%] mx-auto'>
                <h2 className='text-2xl font-bold mb-5'>What is useRef?</h2>
                <p>In React, useRef is a hook that returns a mutable ref object that can be used to store a value that persists between renders. Unlike useState, updating the value of a useRef does not trigger a re-render.</p>
            </div>
            <div className='p-12 mt-5 bg-green-100 rounded-lg w-[70%] mx-auto'>
                <h2 className='text-2xl font-bold mb-5'>What is useMemo?</h2>
                <p>useMemo is a hook that memoizes a value and returns it only if one or more of its dependencies have changed. This can help optimize the performance of your application by avoiding unnecessary re-renders. The useMemo hook takes two arguments: a function that computes the memoized value, and an array of dependencies that the function depends on. If any of the dependencies change, the function is re-run and the new value is returned.</p>
            </div>
        </div>
    );
};

export default Blog;