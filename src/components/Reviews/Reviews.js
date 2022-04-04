import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className='p-6 bg-slate-200 border-4 border-slate-700 rounded-md'>
            <h3 className='font-bold text-lg'>Name: {review.name}</h3>
            <p><span className='font-bold'>Comment:</span> {review.body}</p>
            <p className='mt-4'><span className='font-bold'>Rating:</span> {review.rating}</p>
        </div>
    );
};

export default Reviews;