import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>User Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4 md:mx-16 px-5 py-5'>
                {
                    reviews.map(review => <Reviews key={review.id}
                        review={review}>
                    </Reviews>)
                }
            </div>
        </div>
    );
};

export default ReviewPage;