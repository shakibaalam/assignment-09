import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4 md:mx-16 px-5 py-5'>
            <div className='p-6 bg-slate-200'>
                <h3>What is Context API?</h3>
            </div>
            <div className='p-6 bg-slate-200'>
                <h3>2.What is Semantic tag?</h3>
            </div>
            <div className='p-6 bg-slate-200'>
                <h3>3.Inline-Block vs Inline-Block elements</h3>
            </div>
        </div>
    );
};

export default Blog;