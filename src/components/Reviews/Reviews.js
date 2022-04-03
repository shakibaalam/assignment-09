import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className='p-6 bg-slate-200'>
            <h3>Name:{review.name}</h3>
            <p>Comment: {review.body}</p>
            <p>Rating: {review.rating}</p>
        </div>
    );
};

export default Reviews;